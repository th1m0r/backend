const Vendedor = require('../models/Vendedor');

const listar = async () => await Vendedor.findAll();
const pesquisar = async id => await Vendedor.findByPk(id, { include: { association: 'empresa' } });
const excluir = async id => await Vendedor.destroy({ where: { id: id } });
const alterar = async (id, vendedor) => await Vendedor.update(vendedor, { where: { id: id } });
const salvar = async vendedor => Vendedor.create(vendedor);

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};