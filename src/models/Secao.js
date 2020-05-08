const { Model, DataTypes } = require('sequelize');

class Secao extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(30),
                allowNull: false,
            }
        },
            {
                sequelize,
                modelName: 'secao',
                tableName: 'secao',
                timestamps: false,
            }
        )
    }
}
module.exports = Secao;