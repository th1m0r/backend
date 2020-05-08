const { Model, DataTypes } = require('sequelize');

class Familia extends Model {
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
                modelName: 'familia',
                tableName: 'familia',
                timestamps: false,
            }
        )
    }
}
module.exports = Familia;