module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'mestre',
    database: 'db_aratu',
    define: {
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
};