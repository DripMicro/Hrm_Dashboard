/* eslint-disable no-undef */
const db = require('../models');

const { ROLES } = db;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use!'
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email is already in use!'
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i += 1) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role does not exist = ${req.body.roles[i]}`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
