const Produto = require('../models/Produto');

const listar = async () => await Produto.findAll({limit: 40})
const pesquisar = async id => await Produto.findByPk(id)
const salvar = async produto => await Produto.create(produto)
const excluir = async id => await Produto.destroy({ where: { id: id } })
const alterar = async (id, produto) => await Produto.update(produto, { where: { id: id } })

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};