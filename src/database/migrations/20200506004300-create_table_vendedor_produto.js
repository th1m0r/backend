'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendedor_produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      vendedor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'vendedor',
          },
          key: 'id'
        },
        allowNull: false
      },
      produto_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'produto',
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
  }
};
