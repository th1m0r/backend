'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido_itens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'pedido', },
          key: 'id'
        },
        allowNull: false
      },
      produto_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'cliente', },
          key: 'id'
        },
        allowNull: false
      },
      quantidade: { type: Sequelize.DECIMAL(10, 6), allowNull: false },
      embalagem: { type: Sequelize.DECIMAL(10, 6), allowNull: false },
      preco_venda: { type: Sequelize.DECIMAL(10, 6), allowNull: false },
      valor_desconto: { type: Sequelize.DECIMAL(10, 6), allowNull: false },
    });
  },

  down: (queryInterface, Sequelize) => {
  }
};
