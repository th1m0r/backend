const Categoria = require('../models/Categoria');

const listar = async () => await Categoria.findAll()

module.exports = {
    listar,
}