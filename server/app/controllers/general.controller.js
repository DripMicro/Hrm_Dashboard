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

exports.updateSchedule = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { userId } = jwt.verify(accessToken, JWT_SECRET);
  Calendar.findOne({
    where: { userId }
  }).then((calendar) => {
    const tmpSchedule = JSON.parse(calendar.schedule);
    const updatedSchedule = req.body;
    const schedule = tmpSchedule;
    tmpSchedule.map((months, mIndex) => {
      if (mIndex === updatedSchedule.month) {
        months.map((days, dIndex) => {
          if (dIndex === updatedSchedule.day) {
            const d = {
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
    const updatedData = JSON.stringify(schedule);
    Calendar.update(
      {
        schedule: updatedData
      },
      { where: { userId } }
    ).then(() => {
      res.status(200).send('success');
    });
  });
};
