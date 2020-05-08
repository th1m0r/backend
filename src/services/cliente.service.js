const Cliente = require('../models/Cliente');

const listar = async () => await Cliente.findAll()
const pesquisar = async id => await Cliente.findByPk(id);
const salvar = async cliente => await Cliente.create(cliente);
const excluir = async id => await Cliente.destroy({ where: { id: id } })
const alterar = async (id, cliente) => await Cliente.update(cliente, { where: { id: id } })

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};