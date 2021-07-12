module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define('teams', {
    color: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    capacity: {
      type: Sequelize.INTEGER.UNSIGNED
    },
    companyId: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });

  return Team;
};
