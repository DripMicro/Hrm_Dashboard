/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
const db = require('../models');
const config = require('../config/auth.config');

const { sequelize } = db;

const User = db.user;
// const Role = db.role;
const { ROLES } = db;

// const { Op } = db.Sequelize;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = config.secret;
const JWT_EXPIRES_IN = '5 days';

const ADMIN = 2;
const MEMBER = 4;
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then((userData) => {
      let emailCount = 0;
      let role = ADMIN;
      User.findAll().then((users) => {
        users.map((user) => {
          const reqEmail = req.body.email.split('@')[1].split('.')[0];
          const existEmail = user.email.split('@')[1].split('.')[0];
          if (reqEmail === existEmail) {
            emailCount += 1;
          }
        });

        if (emailCount > 1) role = MEMBER;

        const accessToken = jwt.sign({ userId: userData.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN
        });

        const user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: ROLES[role - 1].toUpperCase(),
          offices: ['1']
        };

        const sql = `
          UPDATE users
          SET roleId = ${role}
          WHERE id = ${userData.id};
        `;
        sequelize.query(sql, {
          type: sequelize.QueryTypes.UPDATE
        });

        // set user office
        userData.setOffices([1]).then(() => {
          const sql = `
            UPDATE user_offices
            SET isManager = 0
            WHERE userId = ${userData.id} and officeId = 1;
          `;
          sequelize.query(sql, {
            type: sequelize.QueryTypes.UPDATE
          });
        });
        res.send({ accessToken, user });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((userData) => {
      if (!userData) {
        return res.status(400).send({ message: 'auth/user-not-found' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        userData.password
      );

      if (!passwordIsValid) {
        return res.status(400).send({
          accessToken: null,
          message: 'auth/wrong-password'
        });
      }

      const token = jwt.sign({ id: userData.id }, config.secret, {
        expiresIn: 300 // 24 hours 86400
      });

      const officeIds = [];
      userData.getOffices().then((offices) => {
        for (let i = 0; i < offices.length; i += 1) {
          officeIds.push(`${offices[i].id}`);
        }
        const user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: ROLES[userData.roleId - 1].toUpperCase(),
          offices: officeIds
        };
        const accessToken = token;
        console.log(user);
        res.status(200).send({ accessToken, user });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
