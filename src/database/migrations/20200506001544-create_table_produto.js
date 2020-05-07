'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ean: { type: Sequelize.BIGINT, allowNull: false, unique: 'ean_unique', },
      descricao: { type: Sequelize.STRING(100), allowNull: false },
      descricao_reduzida: { type: Sequelize.STRING(24), allowNull: false },
      unidade: { type: Sequelize.STRING(2), allowNull: false },
      ativo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      bloqueia_venda: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      controla_estoque: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
      foto: { type: Sequelize.STRING(100), allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
      secao_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'secao', },
          key: 'id'
        },
        allowNull: false
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'categoria', },
          key: 'id'
        },
        allowNull: false
      },
      familia_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'familia', },
          key: 'id'
        },
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {

  }
};
