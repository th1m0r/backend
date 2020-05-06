const { Model, DataTypes } = require('sequelize');

class Empresa extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            razaoSocial: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            nomeFantasia: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            cnpj: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            inscricaoEstadual: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            inscricaoMunicipal: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            cnae: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            tipoLogradouro: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            logradouro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(5),
                allowNull: true
            },
            bairro: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            cep: {
                type: DataTypes.STRING(9),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(60),
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            codigoIbge: {
                type: DataTypes.STRING(7),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            celular: {
                type: DataTypes.STRING(15),
                allowNull: true
            },
            responsavel: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            documentoResponsavel: {
                type: DataTypes.STRING(14),
                allowNull: false
            },
            indicadorAtividade: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            regimeTributario: {
                type: DataTypes.STRING(1),
                allowNull: false
            },
            simplesNacional: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            geraCreditoIcms: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            aliquotaPis: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            aliquotaCofins: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            aliquotaIcmsSimples: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            aliquotaIrpj: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            aliquotaContribuicao_social: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            percentualPerda: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            percentualCustoFixo: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00'
            },
            percentualOutrasDespesas: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00',
            },
            percentualDespesasOperacionais: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: '0.00',
            },
            quantidadePdvs: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: '0',
            },
            codigoCsc: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        }, {
            sequelize,
            modelName: 'Empresa',
            tableName: 'empresa',
        })
    }
}
module.exports = Empresa;