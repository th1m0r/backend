const { Model, DataTypes } = require('sequelize');

class Vendedor extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: { type: DataTypes.STRING(60), allowNull: false },
            cpf: { type: DataTypes.STRING(11), allowNull: false },
            email: { type: DataTypes.STRING(100), allowNull: false },
            telefone: { type: DataTypes.STRING(100), allowNull: true },
            comissao: { type: DataTypes.DECIMAL(5, 2), allowNull: false, defaultValue: 0.00 },
        },
            {
                sequelize,
                modelName: "Vendedor",
                tableName: "vendedor",
                timestamps: false,
            })
    }
    static associate(models) {
        this.belongsTo(models.Empresa)
        this.belongsToMany(models.Produto, { as: 'produtos', through: 'VendedorProduto' });
    }
}
module.exports = Vendedor;