'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cliente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: { type: Sequelize.STRING(100), allowNull: false },
      nome_resumido: { type: Sequelize.STRING(60), allowNull: false },
      cpf_cnpj: { type: Sequelize.STRING(14), allowNull: false },
      rg_ie: { type: Sequelize.STRING(14), allowNull: true },
      tipo_logradouro: { type: Sequelize.STRING(20), allowNull: false },
      logradouro: { type: Sequelize.STRING(100), allowNull: false },
      numero: { type: Sequelize.STRING(5), allowNull: true },
      bairro: { type: Sequelize.STRING(30), allowNull: false },
      complemento: { type: Sequelize.STRING(100), allowNull: true },
      cep: { type: Sequelize.STRING(9), allowNull: false },
      cidade: { type: Sequelize.STRING(60), allowNull: false },
      uf: { type: Sequelize.STRING(2), allowNull: false },
      codigo_ibge: { type: Sequelize.STRING(7), allowNull: false },
      codigo_pais: { type: Sequelize.STRING(4), allowNull: false },
      email: { type: Sequelize.STRING(100), allowNull: false },
      telefone: { type: Sequelize.STRING(15), allowNull: true },
      celular: { type: Sequelize.STRING(15), allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, },
      updated_at: { type: Sequelize.DATE, allowNull: false, },
    });
  },

  down: (queryInterface, Sequelize) => {

  }
};
