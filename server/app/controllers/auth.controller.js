/* eslint-disable consistent-return */
/* eslint-disable import/order */
const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;
const Role = db.role;

const { Op } = db.Sequelize;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = config.secret;
const JWT_EXPIRES_IN = '5 days';

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then((userData) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then((roles) => {
          userData.setRoles(roles).then(() => {
            // user = {
            //   id: faker.datatype.uuid(),
            //   displayName: `${firstName} ${lastName}`,
            //   email,
            //   password,
            //   photoURL: null,
            //   phoneNumber: null,
            //   country: null,
            //   address: null,
            //   state: null,
            //   city: null,
            //   zipCode: null,
            //   about: null,
            //   role: 'user',
            //   isPublic: true
            // };

            const accessToken = jwt.sign({ userId: userData.id }, JWT_SECRET, {
              expiresIn: JWT_EXPIRES_IN
            });
            console.log(accessToken);
            res.send({ message: 'User registered successfully!' });
          });
        });
      } else {
        console.log(userData);
        const accessToken = jwt.sign({ userId: userData.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN
        });

        const userInfo = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: 1,
          accessToken
        };
        // user role = 1
        userData.setRoles([1]).then(() => {
          res.send({ userInfo });
        });
      }
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
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        userData.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        });
      }

      const token = jwt.sign({ id: userData.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      const authorities = [];
      userData.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i += 1) {
          authorities.push(`ROLE_${roles[i].name.toUpperCase()}`);
        }
        const user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          roles: authorities
        };
        const accessToken = token;
        res.status(200).send({ accessToken, user });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
