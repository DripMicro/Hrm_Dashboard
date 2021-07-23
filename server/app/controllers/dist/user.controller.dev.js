"use strict";

/* eslint-disable no-continue */

/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */

/* eslint-disable array-callback-return */
var jwt = require('jsonwebtoken');

var multer = require('multer');

var config = require('../config/auth.config');

var JWT_SECRET = config.secret;

var db = require('../models');

var User = db.user;
var ROLES = db.ROLES;
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, '../public/static/uploads');
  },
  filename: function filename(req, file, cb) {
    console.log(file);
    cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});
var upload = multer({
  storage: storage
}).single('file');

exports.getUserList = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify = jwt.verify(accessToken, JWT_SECRET),
      userId = _jwt$verify.userId;

  User.findOne({
    where: {
      id: userId
    }
  }).then(function (userData) {
    var officeIds = [];
    userData.getOffices().then(function (offices) {
      for (var i = 0; i < offices.length; i += 1) {
        officeIds.push("".concat(offices[i].id));
      }

      var user = {
        id: userData.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        roles: ROLES[userData.roleId - 1].toUpperCase(),
        offices: officeIds
      };
      User.findAll().then(function (datas) {
        getUserLists(datas).then(function (users) {
          var existEmail = user.email.split('@')[1].split('.')[0];
          var isAdmin = user.roles === 'ADMIN';
          var members = [];
          users.map(function (res) {
            var reqEmail = res.email.split('@')[1].split('.')[0];

            if (isAdmin) {
              if (existEmail === reqEmail) members.push(res);
            } else if (existEmail === reqEmail) {
              var isDuplicated = false;

              for (var _i = 0; _i < res.officeIds.length; _i += 1) {
                if (isDuplicated) {
                  isDuplicated = false;
                  break;
                }

                for (var j = 0; j < user.offices.length; j += 1) {
                  if (res.officeIds[_i] === user.offices[j]) {
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

function getUserLists(datas) {
  var users, i, offices, officeIds, _i2;

  return regeneratorRuntime.async(function getUserLists$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          users = [];
          i = 0;

        case 2:
          if (!(i < datas.length)) {
            _context.next = 12;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(datas[i].getOffices());

        case 5:
          offices = _context.sent;
          officeIds = [];

          for (_i2 = 0; _i2 < offices.length; _i2 += 1) {
            officeIds.push("".concat(offices[_i2].id));
          }

          users.push({
            id: datas[i].id,
            avatarUrl: datas[i].photoURL,
            name: "".concat(datas[i].firstname, " ").concat(datas[i].lastname),
            email: datas[i].email,
            role: ROLES[datas[i].roleId - 1],
            isLinked: false,
            officeIds: officeIds
          });

        case 9:
          i += 1;
          _context.next = 2;
          break;

        case 12:
          return _context.abrupt("return", users);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

exports.updateProfile = function (req, res) {
  User.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    photoURL: req.body.photoURL,
    roles: 1
  }, {
    where: {
      email: req.body.email
    }
  }).then(function () {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (userData) {
      userData.setOffices(req.body.officeId);
      userData.setTeams(req.body.teamId);
      res.status(200).send('success');
    });
  })["catch"](function (error) {
    console.log('error', error);
  });
};

exports.uploadAvatar = function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    }

    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  });
};

exports.getProfile = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify2 = jwt.verify(accessToken, JWT_SECRET),
      userId = _jwt$verify2.userId;

  User.findOne({
    where: {
      id: userId
    }
  }).then(function (userData) {
    var officeIds = [];
    var teamIds = [];
    userData.getOffices().then(function (offices) {
      for (var i = 0; i < offices.length; i += 1) {
        officeIds.push("".concat(offices[i].id));
      }

      userData.getTeams().then(function (teams) {
        for (var _i3 = 0; _i3 < teams.length; _i3 += 1) {
          teamIds.push("".concat(teams[_i3].id));
        }

        var user = {
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          photoURL: userData.photoURL,
          roles: ROLES[userData.roleId - 1].toUpperCase(),
          offices: officeIds,
          teams: teamIds
        };
        res.status(200).send({
          user: user
        });
      });
    });
  });
};