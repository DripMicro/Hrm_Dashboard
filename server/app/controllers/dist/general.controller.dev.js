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
  }).then(function (users) {
    var resData = [];
    users.map(function (user) {
      var userObj = {
        id: user.id,
        avatarURL: user.photoURL,
        name: "".concat(user.firstname, " ").concat(user.lastname)
      };
      resData.push(userObj);
    });
    res.status(200).send(resData);
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