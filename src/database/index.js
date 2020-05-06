const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Empresa = require('../models/Empresa');
const Secao = require('../models/Secao');
const Categoria = require('../models/Categoria');
const Familia = require('../models/Familia');

const sequelize = new Sequelize(dbConfig);



Empresa.init(sequelize);
Secao.init(sequelize);
Categoria.init(sequelize);
Familia.init(sequelize);


module.exports = sequelize;