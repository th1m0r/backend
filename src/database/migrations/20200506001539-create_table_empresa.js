'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      razao_social: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      nome_fantasia: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      inscricao_estadual: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      inscricao_municipal: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      cnae: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      tipo_logradouro: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      cep: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      codigo_ibge: {
        type: Sequelize.STRING(7),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      celular: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      responsavel: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      documento_responsavel: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      indicador_atividade: {
        type: Sequelize.STRING(1),
        allowNull: true
      },
      regime_tributario: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      simples_nacional: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      gera_credito_icms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      aliquota_pis: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      aliquota_cofins: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      aliquota_icms_simples: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      aliquota_irpj: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      aliquota_contribuicao_social: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      percentual_perda: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      percentual_custo_fixo: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00'
      },
      percentual_outras_despesas: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00',
      },
      percentual_despesas_operacionais: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: '0.00',
      },
      quantidade_pdvs: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
      },
      codigo_csc: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
  }
};
