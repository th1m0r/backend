const Vendedor = require('../models/Vendedor');

const listar = async () => await Vendedor.findAll();
const pesquisar = async id => await Vendedor.findByPk(id, { include: { association: 'Empresa' } });
const salvar = async vendedor => await Vendedor.create(vendedor);
const excluir = async id => await Vendedor.destroy({ where: { id: id } });
const alterar = async (id, vendedor) => await Vendedor.update(vendedor, { where: { id: id } });

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};