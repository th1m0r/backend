const Vendedor = require('../models/Vendedor');

const listar = async () => await Vendedor.findAll();
const pesquisar = async id => await Vendedor.findByPk(id, { include: { association: 'empresa' } });
const excluir = async id => await Vendedor.destroy({ where: { id: id } });
const alterar = async (id, vendedor) => await Vendedor.update(vendedor, { where: { id: id } });
const salvar = async vendedor => await Vendedor.create(vendedor);
const listarProdutos = async id => await Vendedor.findByPk(
    id, {
    include: [
        {
            association: 'produtos',
            attributes: ['id', 'ean', 'descricao', 'unidade'],
            through: { attributes: [] }
        }
    ]
});
const inserirProdutos = async (id, produtos) => {
    let vendedorModel = await Vendedor.findByPk(id);
    if (vendedorModel) {
        const resultado = await vendedorModel.addProdutos(
            produtos.map(produto => produto.id)
        );
        if(!resultado) {
            throw {message: "Produtos já associados ao vendedor."}
        }
        return await vendedorModel.save();
    } else {
        throw { message: "Vendedor não cadastrado." }
    }
}
const removerProdutos = async (id, produtos) => {
    let vendedorModel = await Vendedor.findByPk(id);
    if (vendedorModel) {
        const resultado = await vendedorModel.removeProdutos(
            produtos.map(produto => produto.id)
        );
        if(!resultado) {
            throw {message: "Produtos não estão associados ao vendedor."}
        }
        return await vendedorModel.save();
    } else {
        throw { message: "Vendedor não cadastrado." }
    }
}

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar,
    listarProdutos,
    inserirProdutos,
    removerProdutos
};