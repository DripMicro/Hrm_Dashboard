const Sequelize = require('sequelize');
const config = require('../config/db.config.js');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize);
db.role = require('./role.model.js')(sequelize, Sequelize);
db.office = require('./office.model.js')(sequelize, Sequelize);

// roles relative
// db.role.belongsToMany(db.user, {
//   through: 'user_roles',
//   foreignKey: 'roleId',
//   otherKey: 'userId'
// });
// db.user.belongsToMany(db.role, {
//   through: 'user_roles',
//   foreignKey: 'userId',
//   otherKey: 'roleId'
// });

// db.role.hasOne(db.user);
// db.user.belongsTo(db.role);

// offices relative
db.office.belongsToMany(db.user, {
  through: 'user_offices',
  foreignKey: 'officeId',
  otherKey: 'userId'
});
db.user.belongsToMany(db.office, {
  through: 'user_offices',
  foreignKey: 'userId',
  otherKey: 'officeId'
});

db.ROLES = ['super admin', 'admin', 'leader', 'member'];
db.OFFICES = [
  { emoji: '🙂', name: 'Office1', capacity: 5 },
  { emoji: '🙂', name: 'Office2', capacity: 6 },
  { emoji: '🙂', name: 'Office3', capacity: 3 }
];

module.exports = db;
