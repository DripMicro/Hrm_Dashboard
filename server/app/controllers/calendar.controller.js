/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable array-callback-return */
const jwt = require('jsonwebtoken');
const db = require('../models');

const Calendar = db.calendar;
const config = require('../config/auth.config');

const JWT_SECRET = config.secret;

exports.getCalendar = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { userId } = jwt.verify(accessToken, JWT_SECRET);
  Calendar.findOne({
    where: { userId }
  }).then((calendar) => {
    console.log('this is canendar', calendar);
    res.status(200).send(JSON.parse(calendar.schedule));
  });
};

// exports.addTeam = (req, res) => {
//   console.log('here is AddTeam');

//   Team.create({
//     color: '#9900EF',
//     name: 'New Team',
//     capacity: 5
//   }).then((teamList) => {
//     const data = {
//       id: teamList.id
//     };
//     res.status(200).send(data);
//   });
// };

// exports.deleteTeam = (req, res) => {
//   const { teamId } = req.body;
//   Team.destroy({
//     where: {
//       id: teamId
//     }
//   });
//   res.status(200).send({ message: 'Deleted successfully!' });
// };

// exports.updateTeamList = (req, res) => {
//   const teamList = req.body;
//   teamList.map((team) => {
//     const updateValues = {
//       color: team.color,
//       name: team.name,
//       capacity: Number(team.capacity)
//     };
//     Team.update(updateValues, { where: { id: team.id } });
//   });
//   res.status(200).send('success');
// };
