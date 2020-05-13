const Pedido = require('../models/Pedido');

const listar = async () => await Pedido.findAll()
const pesquisar = async id => await Pedido.findByPk(id,
    {
        include: [
            {
                association: 'itens',
                attributes: ['id','quantidade', 'embalagem', 'valorDesconto', 'precoVenda'],
                include: [{
                    association: 'produto',
                    attributes: ['id', 'ean', 'descricao']
                }]
            }
        ]
    });
const salvar = async pedido => await Pedido.create(pedido,
    {
        include: [
            { association: 'itens' }
        ]
    });
const excluir = async id => await Pedido.destroy({ where: { id: id } })
const alterar = async (id, pedido) => await Pedido.update(pedido, { where: { id: id } })

module.exports = {
    listar,
    pesquisar,
    salvar,
    excluir,
    alterar
};