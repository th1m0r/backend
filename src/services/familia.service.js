const Familia = require('../models/Familia');

const listar = async () => await Familia.findAll()

module.exports = {
    listar,
}