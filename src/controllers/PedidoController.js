const pedidoService = require('../services/pedido.service');

class PedidoController {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }

    listar = (req, res) => {
        this.pedidoService.listar()
            .then(pedidos => (pedidos ? res.json(pedidos)
                : res.status(404).json({ mensagem: "Não existem pedidos em aberto." })))
            .catch(err => res.status(400).json(err));
    }
    pesquisar = ({ params: { id } }, res) => {
        this.pedidoService.pesquisar(id)
            .then(pedido => (pedido ? res.json(pedido)
                : res.status(404).json({ mensagem: "Pedido não encontrado" })))
            .catch(err => res.status(400).json(err))
    }

    salvar = (req, res) => {
        this.pedidoService.salvar(req.body)
            .then(retorno => (retorno ? res.status(201).json({ mensagem: "Pedido salvo com sucesso!" })
                : res.status(400).json({ menssagem: "Erro ao salvar pedido." })))
            .catch(err => res.status(400).json(err))
    }

    excluir = ({ params: { id } }, res) => {
        this.pedidoService.excluir(id)
            .then(retorno => (retorno ? res.json({ mensagem: "Pedido excluido com sucesso." })
                : res.status(404).json({ message: "Pedido não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

    alterar = (req, res) => {
        const id = req.params.id;
        this.pedidoService.alterar(id, req.body)
            .then(retorno => (retorno[0] ? res.status(201).json({ mensagem: "Pedido alterado com sucesso!" })
                : res.status(404).json({ message: "Pedido não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

}
module.exports = new PedidoController(pedidoService);