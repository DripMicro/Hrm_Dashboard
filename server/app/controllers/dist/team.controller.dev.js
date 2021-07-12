"use strict";

/* eslint-disable no-continue */

/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */

/* eslint-disable array-callback-return */
var jwt = require('jsonwebtoken');

var db = require('../models');

var Team = db.team;

var config = require('../config/auth.config');

var JWT_SECRET = config.secret;

exports.getTeamList = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(200).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify = jwt.verify(accessToken, JWT_SECRET),
      companyId = _jwt$verify.companyId;

  Team.findAll({
    where: {
      companyId: companyId
    }
  }).then(function (teams) {
    var teamList = [];
    teams.map(function (team) {
      teamList.push({
        id: team.id,
        color: team.color,
        name: team.name,
        capacity: team.capacity
      });
    });
    console.log(teamList);
    res.status(200).send(teamList);
  });
};

exports.addTeam = function (req, res) {
  console.log('here is AddTeam');
  Team.create({
    color: '#9900EF',
    name: 'New Team',
    capacity: 5
  }).then(function (teamList) {
    var data = {
      id: teamList.id
    };
    res.status(200).send(data);
  });
};

exports.deleteTeam = function (req, res) {
  var teamId = req.body.teamId;
  Team.destroy({
    where: {
      id: teamId
    }
  });
  res.status(200).send({
    message: 'Deleted successfully!'
  });
};

exports.updateTeamList = function (req, res) {
  var teamList = req.body;
  teamList.map(function (team) {
    var updateValues = {
      color: team.color,
      name: team.name,
      capacity: Number(team.capacity)
    };
    Team.update(updateValues, {
      where: {
        id: team.id
      }
    });
  });
  res.status(200).send('success');
};