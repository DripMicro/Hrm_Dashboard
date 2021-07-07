/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable array-callback-return */
const jwt = require('jsonwebtoken');

const config = require('../config/auth.config');

const JWT_SECRET = config.secret;

const db = require('../models');

// const { sequelize } = db;
const User = db.user;
const { ROLES } = db;

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};

exports.getMembers = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(200).send({ message: 'Authorization token missing' });
  }

  const accessToken = authorization.split(' ')[1];
  const { id } = jwt.verify(accessToken, JWT_SECRET);
  User.findOne({
    where: {
      id
    }
  }).then((userData) => {
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
      User.findAll().then((datas) => {
        getUserLists(datas).then((users) => {
          const existEmail = user.email.split('@')[1].split('.')[0];
          const isAdmin = user.roles === 'ADMIN';
          const members = [];
          users.map((res) => {
            const reqEmail = res.email.split('@')[1].split('.')[0];
            if (isAdmin) {
              if (existEmail === reqEmail) members.push(res);
            } else if (existEmail === reqEmail) {
              let isDuplicated = false;
              for (let i = 0; i < res.officeIds.length; i += 1) {
                if (isDuplicated) {
                  isDuplicated = false;
                  continue;
                }
                for (let j = 0; j < user.offices.length; j += 1) {
                  if (res.officeIds[i] === user.offices[j]) {
                    isDuplicated = true;
                    members.push(res);
                    break;
                  }
                }
              }
            }
          });
          res.status(200).send(members);
        });
      });
    });
  });
};

async function getUserLists(datas) {
  const users = [];
  for (let i = 0; i < datas.length; i += 1) {
    const offices = await datas[i].getOffices();
    const officeIds = [];
    for (let i = 0; i < offices.length; i += 1) {
      officeIds.push(`${offices[i].id}`);
    }
    users.push({
      id: datas[i].id,
      avatarUrl: `/static/mock-images/avatars/avatar_${i}.jpg`,
      name: `${datas[i].firstname} ${datas[i].lastname}`,
      email: datas[i].email,
      role: ROLES[datas[i].roleId - 1],
      isLinked: false,
      officeIds
    });
  }
  return users;
}

exports.updateProfile = (req, res) => {
  User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      roles: 1
    },
    { where: { email: req.body.email } }
  )
    .then(() => {
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then((userData) => {
        console.log('UUUUUUUUUU:', req.body.officeIds);
        userData.setOffices(req.body.officeIds);
        res.status(200).send('success');
      });
    })
    .catch((error) => {
      console.log('error', error);
    });
};

exports.getProfile = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(200).send({ message: 'Authorization token missing' });
  }

  const accessToken = authorization.split(' ')[1];
  const { id } = jwt.verify(accessToken, JWT_SECRET);
  User.findOne({
    where: {
      id
    }
  }).then((userData) => {
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
      console.log(user);
      res.status(200).send({ user });
    });
  });
};
