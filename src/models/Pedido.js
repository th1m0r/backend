const { Model, DataTypes } = require('sequelize')

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            observacao: { type: DataTypes.STRING(100), allowNull: false },
            situacao: { type: DataTypes.STRING(1), allowNull: false, defaultValue: "A" },
            faturado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            data_entrega: { type: DataTypes.DATE, allowNull: false },
            created_at: { type: DataTypes.DATE, allowNull: false },
            updated_at: { type: DataTypes.DATE, allowNull: false }
        },
            {
                sequelize,
                tableName: 'pedido',
                modelName: 'pedido',
                timestamps: true
            }
        )
    }
    static associate(models) {
        this.belongsTo(models.empresa, { foreignKey: 'empresaId' });
        this.belongsTo(models.cliente, { foreignKey: 'clienteId' });
        this.belongsTo(models.Vendedor, { foreignKey: 'vendedorId' });
        this.hasMany(models.pedidoItens, { as: 'itens', foreignKey: 'pedidoId' });
    }
}
module.exports = Pedido;