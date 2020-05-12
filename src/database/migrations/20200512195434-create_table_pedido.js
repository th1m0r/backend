'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'empresa', },
          key: 'id'
        },
        allowNull: false
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'cliente', },
          key: 'id'
        },
        allowNull: false
      },
      vendedor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'vendedor', },
          key: 'id'
        },
        allowNull: false
      },
      observacao: { type: Sequelize.STRING(100), allowNull: false },
      situacao: { type: Sequelize.STRING(1), allowNull: false, defaultValue: "A" },
      faturado: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      data_entrega: { type: Sequelize.DATE, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false }
    });
  },

  down: (queryInterface, Sequelize) => {
  }
};
