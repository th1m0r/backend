'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendedor', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      empresa_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'empresa' },
          key: 'id'
        },
        allowNull: false
      },
      nome: { type: Sequelize.STRING(60), allowNull: false, },
      cpf: { type: Sequelize.STRING(11), allowNull: false },
      email: { type: Sequelize.STRING(100), allowNull: false },
      telefone: { type: Sequelize.STRING(100), allowNull: true },
      comissao: { type: Sequelize.DECIMAL(5, 2), allowNull: false, defaultValue: 0.00 },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
  }
};
