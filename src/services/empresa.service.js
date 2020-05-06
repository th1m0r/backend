const Empresa = require('../models/Empresa');

const listar = async () => await Empresa.findAll()
const pesquisar = async id => await Empresa.findByPk(id);
const salvar = async empresa => await Empresa.create(empresa);
const excluir = async id => await Empresa.destroy({ where: { id: id } })
const alterar = async (id, empresa) => await Empresa.update(empresa, { where: { id: id } })

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};