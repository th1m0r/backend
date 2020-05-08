const { Model, DataTypes } = require('sequelize');
const Secao = require('../models/Secao');
const Categoria = require('../models/Categoria');
const Familia = require('../models/Familia');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            ean: { type: DataTypes.BIGINT, allowNull: false, unique: 'ean_unique' },
            descricao: { type: DataTypes.STRING(100), allowNull: false },
            descricaoReduzida: { type: DataTypes.STRING(24), allowNull: false },
            unidade: { type: DataTypes.STRING(2), allowNull: false },
            ativo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
            bloqueiaVenda: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            controlaEstoque: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
            foto: { type: DataTypes.STRING(100), allowNull: true }
        },
            {
                sequelize,
                modelName: "produto",
                tableName: "produto",
                timestamps: true
            })
    }
    static associate(models) {
        this.belongsTo(models.secao);
        this.belongsTo(models.categoria, {foreignKey: 'categoriaId'});
        this.belongsTo(models.familia, {foreignKey: 'familiaId'});
        this.belongsToMany(models.Vendedor, { as: 'vendedores', through: 'vendedor_produto' });
    }
}
module.exports = Produto;