const clienteService = require('../services/cliente.service');

class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }

    listar = (req, res) => {
        this.clienteService.listar()
            .then(clientes => (clientes ? res.json(clientes)
                : res.status(404).json({ mensagem: "Não existem clientes cadastrados." })))
            .catch(err => res.status(400).json(err));
    }

    pesquisar = ({ params: { id } }, res) => {
        this.clienteService.pesquisar(id)
            .then(cliente => (cliente ? res.json(cliente)
                : res.status(404).json({ mensagem: "Cliente não encontrado" })))
            .catch(err => res.status(400).json(err))
    }

    salvar = (req, res) => {
        this.clienteService.salvar(req.body)
            .then(retorno => (retorno ? res.status(201).json({ mensagem: "Cliente salvo com sucesso!" })
                : res.status(400).json({ menssagem: "Erro ao salvar cliente." })))
            .catch(err => res.status(400).json(err))
    }

    excluir = ({ params: { id } }, res) => {
        this.clienteService.excluir(id)
            .then(retorno => (retorno ? res.json({ mensagem: "Cliente excluido com sucesso." })
                : res.status(404).json({ message: "Cliente não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

    alterar = (req, res) => {
        const id = req.params.id;
        this.clienteService.alterar(id, req.body)
            .then(retorno => (retorno[0] ? res.status(201).json({ mensagem: "Cliente alterado com sucesso!" })
                : res.status(404).json({ message: "Cliente não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

}
module.exports = new ClienteController(clienteService);