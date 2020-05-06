const Secao = require('../models/Secao');

const listar = async () => await Secao.findAll()

module.exports = {
    listar,
}