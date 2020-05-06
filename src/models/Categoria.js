const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
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
                modelName: 'Categoria',
                tableName: 'categoria',
                timestamps: false,
            }
        )
    }
}
module.exports = Categoria;