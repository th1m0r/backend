const { Model, DataTypes } = require('sequelize');

class PedidoItens extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            quantidade: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
            embalagem: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
            precoVenda: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
            valorDesconto: { type: DataTypes.DECIMAL(10, 6), allowNull: false },
        },
            {
                sequelize,
                tableName: 'pedido_itens',
                modelName: 'pedidoItens',
                timestamps: false
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.pedido, { foreignKey: 'pedidoId' });
        this.belongsTo(models.produto, { foreignKey: 'produtoId' });
    }
}
module.exports = PedidoItens;