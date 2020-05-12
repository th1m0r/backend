const Pedido = require('../models/Pedido');

const listar = async () => await Pedido.findAll()

module.exports = {
    listar,
}