"use strict";

/* eslint-disable no-continue */

/* eslint-disable consistent-return */

/* eslint-disable no-await-in-loop */

/* eslint-disable array-callback-return */
var jwt = require('jsonwebtoken');

var db = require('../models');

var Company = db.company;
var BasicList = db.basiclist;
var CustomList = db.customlist;
var WorkingDays = db.workingdays;
var Organizations = db.organizations;

var config = require('../config/auth.config');

var JWT_SECRET = config.secret;

exports.getOrganizations = function _callee(req, res) {
  var authorization, accessToken, _jwt$verify, companyId, company, calendar, features, statuses, workDayInfo, companyInfo, orgInfo, workingDaysInfo, basicListInfo, customListInfo, basicInfo, customInfo, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          authorization = req.headers.authorization;

          if (authorization) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).send([]));

        case 3:
          accessToken = authorization.split(' ')[1];
          _jwt$verify = jwt.verify(accessToken, JWT_SECRET), companyId = _jwt$verify.companyId;
          company = {};
          calendar = {};
          features = {};
          statuses = {};
          workDayInfo = []; // featching the data;

          _context.next = 12;
          return regeneratorRuntime.awrap(Company.findOne({
            where: {
              id: companyId
            }
          }));

        case 12:
          companyInfo = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(Organizations.findOne({
            where: {
              companyId: companyId
            }
          }));

        case 15:
          orgInfo = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(WorkingDays.findOne({
            where: {
              companyId: companyId
            }
          }));

        case 18:
          workingDaysInfo = _context.sent;
          workingDaysInfo = workingDaysInfo.isWorking.split(',');
          workingDaysInfo.map(function (item) {
            workDayInfo.push(Number(item));
          });
          console.log('this is workingday info', workDayInfo);
          _context.next = 24;
          return regeneratorRuntime.awrap(BasicList.findAll({
            where: {
              companyId: companyId
            }
          }));

        case 24:
          basicListInfo = _context.sent;
          _context.next = 27;
          return regeneratorRuntime.awrap(CustomList.findAll({
            where: {
              companyId: companyId
            }
          }));

        case 27:
          customListInfo = _context.sent;
          basicInfo = [];
          customInfo = [];
          basicListInfo.map(function (item) {
            basicInfo.push({
              id: item.id,
              emoji: item.emoji,
              title: item.title,
              description: item.description,
              isActive: item.isActive
            });
          });
          customListInfo.map(function (item) {
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
          result = {
            company: company,
            calendar: calendar,
            features: features,
            statuses: statuses
          };
          res.status(200).send({
            result: result
          });

        case 38:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.addCustomStatus = function (req, res) {
  var authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).send([]);
  }

  var accessToken = authorization.split(' ')[1];

  var _jwt$verify2 = jwt.verify(accessToken, JWT_SECRET),
      companyId = _jwt$verify2.companyId;

  CustomList.create({
    emoji: '🙂',
    title: 'New Custom',
    isActive: 0,
    companyId: companyId
  }).then(function (customList) {
    var data = {
      id: customList.id
    };
    res.status(200).send(data);
  });
};

exports.updateOrganizations = function _callee4(req, res) {
  var authorization, accessToken, _jwt$verify3, companyId, _req$body, company, calendar, features, statuses, ids, basicList, customList;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          authorization = req.headers.authorization;

          if (authorization) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(400).send([]));

        case 3:
          accessToken = authorization.split(' ')[1];
          _jwt$verify3 = jwt.verify(accessToken, JWT_SECRET), companyId = _jwt$verify3.companyId;
          _req$body = req.body, company = _req$body.company, calendar = _req$body.calendar, features = _req$body.features, statuses = _req$body.statuses;
          _context4.next = 8;
          return regeneratorRuntime.awrap(Company.update({
            name: company.name,
            domain: company.domain
          }, {
            where: {
              id: companyId
            }
          }));

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(Organizations.update({
            isEmail: company.isEmail,
            isGoogleSignIn: company.isGoogleSignIn,
            startingDay: calendar.startingDay,
            monthRange: calendar.monthRange,
            isHalfDays: features.isHalfDays,
            isCities: features.isCities
          }, {
            where: {
              id: companyId
            }
          }));

        case 10:
          ids = calendar.workDays.toString();
          _context4.next = 13;
          return regeneratorRuntime.awrap(WorkingDays.update({
            isWorking: ids
          }, {
            where: {
              companyId: companyId
            }
          }));

        case 13:
          basicList = statuses.basicList, customList = statuses.customList;
          basicList.map(function _callee2(item) {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(BasicList.update({
                      emoji: item.emoji,
                      title: item.title,
                      description: item.description,
                      isActive: item.isActive
                    }, {
                      where: {
                        id: item.id
                      }
                    }));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });
          customList.map(function _callee3(item) {
            return regeneratorRuntime.async(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(CustomList.update({
                      emoji: item.emoji,
                      title: item.title,
                      isActive: item.isActive
                    }, {
                      where: {
                        id: item.id
                      }
                    }));

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          });
          res.status(200).send('success');

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  });
};