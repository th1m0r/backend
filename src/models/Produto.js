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
            foto: { type: DataTypes.STRING(100), allowNull: true },
            SecaoId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Secao,
                    key: 'id'
                },
                allowNull: false,
            },
            CategoriaId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Categoria,
                    key: 'id'
                },
                allowNull: false
            },
            FamiliaId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Familia,
                    key: 'id'
                },
                allowNull: false
            },
        },
            {
                sequelize,
                modelName: "Produto",
                tableName: "produto",
                timestamps: true
            })
    }
    static associate(models) {
        this.belongsTo(models.Secao, { as: 'secao' });
        this.belongsTo(models.Categoria, { as: 'categoria' });
        this.belongsTo(models.Familia, { as: 'familia' });
        this.belongsToMany(models.Vendedor, { as: 'vendedores', through: 'VendedorProduto' });
    }
}
module.exports = Produto;