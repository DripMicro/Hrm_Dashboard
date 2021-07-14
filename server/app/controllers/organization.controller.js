/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable array-callback-return */
const jwt = require('jsonwebtoken');
const db = require('../models');

const Company = db.company;
const BasicList = db.basiclist;
const CustomList = db.customlist;
const WorkingDays = db.workingdays;
const Organizations = db.organizations;

const config = require('../config/auth.config');

const JWT_SECRET = config.secret;

exports.getOrganizations = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { companyId } = jwt.verify(accessToken, JWT_SECRET);

  let company = {};
  let calendar = {};
  let features = {};
  let statuses = {};
  const workDayInfo = [];

  // featching the data;
  const companyInfo = await Company.findOne({ where: { id: companyId } });
  const orgInfo = await Organizations.findOne({
    where: { companyId }
  });
  let workingDaysInfo = await WorkingDays.findOne({
    where: { companyId }
  });

  workingDaysInfo = workingDaysInfo.isWorking.split(',');

  workingDaysInfo.map((item) => {
    workDayInfo.push(Number(item));
  });
  console.log('this is workingday info', workDayInfo);

  const basicListInfo = await BasicList.findAll({ where: { companyId } });
  const customListInfo = await CustomList.findAll({ where: { companyId } });
  const basicInfo = [];
  const customInfo = [];
  basicListInfo.map((item) => {
    basicInfo.push({
      id: item.id,
      emoji: item.emoji,
      title: item.title,
      description: item.description,
      isActive: item.isActive
    });
  });
  customListInfo.map((item) => {
    customInfo.push({
      id: item.id,
      emoji: item.emoji,
      title: item.title,
      isActive: item.isActive
    });
  });

  company = {
    name: companyInfo.name,
    domain: companyInfo.domain,
    isEmail: orgInfo.isEmail,
    isGoogleSignIn: orgInfo.isGoogleSignIn
  };

  calendar = {
    startingDay: orgInfo.startingDay,
    monthRange: orgInfo.monthRange,
    workDays: workDayInfo
  };

  features = {
    isHalfDays: orgInfo.isHalfDays,
    isCities: orgInfo.isCities
  };

  statuses = {
    basicList: basicInfo,
    customList: customInfo
  };

  const result = { company, calendar, features, statuses };
  res.status(200).send({ result });
};

exports.addCustomStatus = (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { companyId } = jwt.verify(accessToken, JWT_SECRET);

  CustomList.create({
    emoji: '🙂',
    title: 'New Custom',
    isActive: 0,
    companyId
  }).then((customList) => {
    const data = {
      id: customList.id
    };
    res.status(200).send(data);
  });
};

exports.updateOrganizations = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send([]);
  }

  const accessToken = authorization.split(' ')[1];
  const { companyId } = jwt.verify(accessToken, JWT_SECRET);
  const { company, calendar, features, statuses } = req.body;

  await Company.update(
    {
      name: company.name,
      domain: company.domain
    },
    { where: { id: companyId } }
  );

  await Organizations.update(
    {
      isEmail: company.isEmail,
      isGoogleSignIn: company.isGoogleSignIn,
      startingDay: calendar.startingDay,
      monthRange: calendar.monthRange,
      isHalfDays: features.isHalfDays,
      isCities: features.isCities
    },
    { where: { id: companyId } }
  );
  const ids = calendar.workDays.toString();
  await WorkingDays.update({ isWorking: ids }, { where: { companyId } });

  const { basicList, customList } = statuses;

  basicList.map(async (item) => {
    await BasicList.update(
      {
        emoji: item.emoji,
        title: item.title,
        description: item.description,
        isActive: item.isActive
      },
      { where: { id: item.id } }
    );
  });

  console.log('THis is CustomList:', customList);
  customList.map(async (item) => {
    await CustomList.update(
      {
        emoji: item.emoji,
        title: item.title,
        isActive: item.isActive
      },
      { where: { id: item.id } }
    );
  });
  res.status(200).send('success');
};

// {
//   company: {
//     name: 'ITDevelopOPS',
//     domain: '@startup.com',
//     isEmail: 0,
//     isGoogleSignIn: 1
//   },
//   calendar: { startingDay: 1, monthRange: 4, workDays: [ 1, 2, 4 ] },
//   features: { isHalfDays: 1, isCities: 0 },
//   statuses: {
//     basicList: [ [Object], [Object], [Object], [Object] ],
//     customList: [ [Object] ]
//   }
// }
// basicList: [
//   {
//     id: 1,
//     emoji: '🏡',
//     title: 'No From home',
//     description: 'Remote (works with Cities feature)',
//     isActive: 1
//   },
//   {
//     id: 2,
//     emoji: '🚶‍♂️',
//     title: 'On the go',
//     description: 'On the go / Out of the office',
//     isActive: 1
//   },
//   {
//     id: 3,
//     emoji: '🏝' ,
//     title: 'Not working',
//     description: 'Holiday / Not working',
//     isActive: 0
//   },
//   {
//     id: 4,
//     emoji: '🤒',
//     title: 'Sick',
//     description: 'Sick days (merged with "Not working")',
//     isActive: 1
//   }
// ],
// customList: [ { id: 4, emoji: '🙂', title: 'Custom 1', isActive: 1 } ]
