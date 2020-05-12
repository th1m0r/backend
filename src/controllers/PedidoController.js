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

}
module.exports = new PedidoController(pedidoService);