const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome: { type: DataTypes.STRING(100), allowNull: false },
            nomeResumido: { type: DataTypes.STRING(60), allowNull: false },
            cpfOuCnpj: { type: DataTypes.STRING(14), allowNull: false, field: 'cpf_cnpj' },
            rgOuIe: { type: DataTypes.STRING(14), allowNull: true, field: 'rg_ie' },
            tipoLogradouro: { type: DataTypes.STRING(20), allowNull: false },
            logradouro: { type: DataTypes.STRING(100), allowNull: false },
            numero: { type: DataTypes.STRING(5), allowNull: true },
            bairro: { type: DataTypes.STRING(30), allowNull: false },
            complemento: { type: DataTypes.STRING(100), allowNull: true },
            cep: { type: DataTypes.STRING(9), allowNull: false },
            cidade: { type: DataTypes.STRING(60), allowNull: false },
            uf: { type: DataTypes.STRING(2), allowNull: false },
            codigoIbge: { type: DataTypes.STRING(7), allowNull: false },
            codigoPais: { type: DataTypes.STRING(4), allowNull: false },
            email: { type: DataTypes.STRING(100), allowNull: false },
            telefone: { type: DataTypes.STRING(15), allowNull: true },
            celular: { type: DataTypes.STRING(15), allowNull: true },
        },
            {
                sequelize,
                modelName: 'cliente',
                tableName: 'cliente',
                timestamps: true
            })
    }
}
module.exports = Cliente;