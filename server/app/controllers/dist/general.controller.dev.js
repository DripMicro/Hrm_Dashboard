"use strict";

/* eslint-disable no-continue */

/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */

/* eslint-disable array-callback-return */
var jwt = require('jsonwebtoken');

var db = require('../models');

var Calendar = db.calendar;
var User = db.user;

var config = require('../config/auth.config');

var _require = require('../models'),
    user = _require.user;

var JWT_SECRET = config.secret;

exports.getCalendar = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify = jwt.verify(accessToken, JWT_SECRET),
      userId = _jwt$verify.userId;

  Calendar.findOne({
    where: {
      userId: userId
    }
  }).then(function (calendar) {
    res.status(200).send(JSON.parse(calendar.schedule));
  });
};

exports.getAllUserStatusById = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify2 = jwt.verify(accessToken, JWT_SECRET),
      companyId = _jwt$verify2.companyId;

  Calendar.findAll({
    where: {
      companyId: companyId
    }
  }).then(function (calendars) {
    var resData = [];
    calendars.map(function (calendar) {
      var resObj = {
        userId: calendar.userId,
        schedule: JSON.parse(calendar.schedule)
      };
      resData.push(resObj);
    });
    res.status(200).send(resData);
  });
};

exports.getUsersByCompany = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify3 = jwt.verify(accessToken, JWT_SECRET),
      companyId = _jwt$verify3.companyId;

  User.findAll({
    where: {
      companyId: companyId
    }
  }).then(function _callee(users) {
    var resData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(getUsers(users));

          case 2:
            resData = _context.sent;
            res.status(200).send(resData);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

exports.updateSchedule = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify4 = jwt.verify(accessToken, JWT_SECRET),
      userId = _jwt$verify4.userId;

  Calendar.findOne({
    where: {
      userId: userId
    }
  }).then(function (calendar) {
    var tmpSchedule = JSON.parse(calendar.schedule);
    var updatedSchedule = req.body;
    var schedule = tmpSchedule;
    tmpSchedule.map(function (months, mIndex) {
      if (mIndex === updatedSchedule.month) {
        months.map(function (days, dIndex) {
          if (dIndex === updatedSchedule.day) {
            var d = {
              icon: updatedSchedule.emoji,
              morning: updatedSchedule.morning,
              afternoon: updatedSchedule.afternoon,
              isHalf: updatedSchedule.isHalf,
              isWork: updatedSchedule.isWork
            };
            schedule[mIndex][dIndex] = d;
          }
        });
      }
    });
    var updatedData = JSON.stringify(schedule);
    Calendar.update({
      schedule: updatedData
    }, {
      where: {
        userId: userId
      }
    }).then(function () {
      res.status(200).send('success');
    });
  });
};

function getUsers(users) {
  var resData, _loop, i;

  return regeneratorRuntime.async(function getUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          resData = [];

          _loop = function _loop(i) {
            var teams, teamIds, userObj;
            return regeneratorRuntime.async(function _loop$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('Console--------> A');
                    _context2.next = 3;
                    return regeneratorRuntime.awrap(users[i].getTeams());

                  case 3:
                    teams = _context2.sent;
                    teamIds = [];
                    teams.map(function (team) {
                      teamIds.push(team.id);
                    });
                    userObj = {
                      id: users[i].id,
                      avatarURL: users[i].photoURL,
                      name: "".concat(users[i].firstname, " ").concat(users[i].lastname),
                      teamIds: teamIds
                    };
                    console.log('----------------------------->', userObj);
                    resData.push(userObj);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          i = 0;

        case 3:
          if (!(i < users.length)) {
            _context3.next = 9;
            break;
          }

          _context3.next = 6;
          return regeneratorRuntime.awrap(_loop(i));

        case 6:
          i += 1;
          _context3.next = 3;
          break;

        case 9:
          return _context3.abrupt("return", resData);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
}