'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const storesTable = queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return storesTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Stores');
  }
};
