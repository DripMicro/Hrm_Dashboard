/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable array-callback-return */
const jwt = require('jsonwebtoken');
const db = require('../models');

const Team = db.team;
const config = require('../config/auth.config');

const JWT_SECRET = config.secret;

exports.getTeamList = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(200).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { companyId } = jwt.verify(accessToken, JWT_SECRET);
  Team.findAll({
    where: { companyId }
  }).then((teams) => {
    const teamList = [];
    teams.map((team) => {
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

exports.addTeam = (req, res) => {
  console.log('here is AddTeam');

  Team.create({
    color: '#9900EF',
    name: 'New Team',
    capacity: 5
  }).then((teamList) => {
    const data = {
      id: teamList.id
    };
    res.status(200).send(data);
  });
};

exports.deleteTeam = (req, res) => {
  const { teamId } = req.body;
  Team.destroy({
    where: {
      id: teamId
    }
  });
  res.status(200).send({ message: 'Deleted successfully!' });
};

exports.updateTeamList = (req, res) => {
  const teamList = req.body;
  teamList.map((team) => {
    const updateValues = {
      color: team.color,
      name: team.name,
      capacity: Number(team.capacity)
    };
    Team.update(updateValues, { where: { id: team.id } });
  });
  res.status(200).send('success');
};
