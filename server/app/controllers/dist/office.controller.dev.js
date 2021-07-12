"use strict";

/* eslint-disable no-continue */

/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */

/* eslint-disable array-callback-return */
var jwt = require('jsonwebtoken');

var db = require('../models');

var config = require('../config/auth.config');

var JWT_SECRET = config.secret;
var Office = db.office;
var sequelize = db.sequelize;

exports.getOfficeList = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(200).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify = jwt.verify(accessToken, JWT_SECRET),
      companyId = _jwt$verify.companyId;

  Office.findAll({
    where: {
      companyId: companyId
    }
  }).then(function (offices) {
    var officeList = [];
    offices.map(function (office) {
      officeList.push({
        id: office.id,
        emoji: office.emoji,
        name: office.name,
        capacity: office.capacity
      });
    });
    res.status(200).send(officeList);
  });
};

exports.getManagerList = function (req, res) {
  sequelize.query('SELECT officeId, userId FROM `user_offices` WHERE isManager = 1', {
    type: sequelize.QueryTypes.SELECT
  }).then(function (users) {
    res.status(200).send(users);
  });
};

exports.updateOfficeList = function (req, res) {
  var officeList = req.body;
  officeList.map(function (reqOffice) {
    var updateValues = {
      emoji: reqOffice.emoji,
      name: reqOffice.name,
      capacity: reqOffice.capacity
    };
    Office.update(updateValues, {
      where: {
        id: reqOffice.id
      }
    });
    console.log(reqOffice.managers);
    var sql = "UPDATE user_offices SET isManager = 0";
    sequelize.query(sql, {
      type: sequelize.QueryTypes.UPDATE
    }).then(function () {
      reqOffice.managers.map(function (manager) {
        var sql = "\n          UPDATE user_offices\n          SET isManager = 1\n          WHERE userId = ".concat(manager.id, " and officeId = ").concat(reqOffice.id, ";\n        ");
        sequelize.query(sql, {
          type: sequelize.QueryTypes.UPDATE
        });
      });
    });
  });
  res.status(200).send('success');
};

exports.deleteOffice = function (req, res) {
  var officeId = req.body.officeId;
  Office.destroy({
    where: {
      id: officeId
    }
  });
  res.status(200).send({
    message: 'Deleted successfully!'
  });
};

exports.addOffice = function (req, res) {
  Office.create({
    emoji: '🙂',
    name: 'New Office',
    capacity: 5
  }).then(function (officeList) {
    var data = {
      id: officeList.id
    };
    res.status(200).send(data);
  });
};