const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Empresa = require('../models/Empresa');
const Secao = require('../models/Secao');
const Categoria = require('../models/Categoria');
const Familia = require('../models/Familia');
const Vendedor = require('../models/Vendedor');
const Produto = require('../models/Produto');
const Cliente = require('../models/Cliente');

const sequelize = new Sequelize(dbConfig);



Empresa.init(sequelize);
Secao.init(sequelize);
Categoria.init(sequelize);
Familia.init(sequelize);
Produto.init(sequelize);
Vendedor.init(sequelize);
Cliente.init(sequelize);

Empresa.associace(sequelize.models);
Produto.associate(sequelize.models);
Vendedor.associate(sequelize.models);

module.exports = sequelize;