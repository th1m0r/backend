const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Empresa = require('../models/Empresa');
const Secao = require('../models/Secao');
const Categoria = require('../models/Categoria');
const Familia = require('../models/Familia');
const Vendedor = require('../models/Vendedor');
const Produto = require('../models/Produto');
const Cliente = require('../models/Cliente');
const Pedido = require('../models/Pedido');
const PedidoItens = require('../models/PedidoItens');

const sequelize = new Sequelize(dbConfig);



Empresa.init(sequelize);
Secao.init(sequelize);
Categoria.init(sequelize);
Familia.init(sequelize);
Produto.init(sequelize);
Vendedor.init(sequelize);
Cliente.init(sequelize);
Pedido.init(sequelize);
PedidoItens.init(sequelize);

Empresa.associace(sequelize.models);
Produto.associate(sequelize.models);
Vendedor.associate(sequelize.models);
Pedido.associate(sequelize.models);
PedidoItens.associate(sequelize.models);

module.exports = sequelize;