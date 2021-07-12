"use strict";

var Sequelize = require('sequelize');

var config = require('../config/db.config.js');

var sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model.js')(sequelize, Sequelize);
db.role = require('./role.model.js')(sequelize, Sequelize);
db.office = require('./office.model.js')(sequelize, Sequelize);
db.team = require('./team.model.js')(sequelize, Sequelize);
db.company = require('./company.model.js')(sequelize, Sequelize); // offices relative

db.office.belongsToMany(db.user, {
  through: 'user_offices',
  foreignKey: 'officeId',
  otherKey: 'userId'
});
db.user.belongsToMany(db.office, {
  through: 'user_offices',
  foreignKey: 'userId',
  otherKey: 'officeId'
}); // team relative

db.team.belongsToMany(db.user, {
  through: 'user_teams',
  foreignKey: 'teamId',
  otherKey: 'userId'
});
db.user.belongsToMany(db.team, {
  through: 'user_teams',
  foreignKey: 'userId',
  otherKey: 'teamId'
});
db.ROLES = ['super admin', 'admin', 'leader', 'member'];
db.OFFICES = [{
  emoji: '👨‍👨‍👧',
  name: 'Office1',
  capacity: 5
}, {
  emoji: '🖥️',
  name: 'Office2',
  capacity: 6
}, {
  emoji: '🏡',
  name: 'Office3',
  capacity: 3
}, {
  emoji: '🏤',
  name: 'Office4',
  capacity: 5
}];
db.TEAMS = [{
  color: '#00D084',
  name: 'Team1',
  capacity: 3
}, {
  color: '#9900EF',
  name: 'Team2',
  capacity: 5
}, {
  color: '#EB144C',
  name: 'Team3',
  capacity: 7
}, {
  color: '#0693E3',
  name: 'Team4',
  capacity: 2
}];
module.exports = db;