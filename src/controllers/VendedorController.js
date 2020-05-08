const vendedorService = require('../services/vendedor.service');

class VendedorController {
    constructor(vendedorService) {
        this.vendedorService = vendedorService;
    }

    listar = (req, res) => {
        this.vendedorService.listar()
            .then(vendedores => (vendedores ? res.json(vendedores)
                : res.status(404).json({ mensagem: "Não existem vendedores cadastrados." })))
            .catch(err => res.status(400).json(err));
    }

    pesquisar = ({ params: { id } }, res) => {
        this.vendedorService.pesquisar(id)
            .then(vendedor => (vendedor ? res.json(vendedor)
                : res.status(404).json({ mensagem: "Vendedor não cadastrado." })))
            .catch(err => res.status(400).json(err))
    }

    salvar = (req, res) => {
        this.vendedorService.salvar(req.body)
            .then(retorno => (retorno ? res.status(201).json({ mensagem: "Vendedor salvo com sucesso!" })
                : res.status(400).json({ menssagem: "Erro ao salvar vendedor." })))
            .catch(err => res.status(400).json(err))
    }

    excluir = ({ params: { id } }, res) => {
        this.vendedorService.excluir(id)
            .then(retorno => (retorno ? res.json({ mensagem: "Vendedor excluido com sucesso." })
                : res.status(404).json({ message: "Vendedor não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

    alterar = (req, res) => {
        const id = req.params.id;
        this.vendedorService.alterar(id, req.body)
            .then(retorno => (retorno[0] ? res.status(201).json({ mensagem: "Vendedor salvo com sucesso!" })
                : res.status(404).json({ message: "Vendedor não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

    listarProdutos = ({ params: { id } }, res) => {
        this.vendedorService.listarProdutos(id)
            .then(vendedor => (vendedor ? res.json(vendedor)
                : res.status(404).json({ message: "Vendedor não cadastrado" })))
            .catch(err => res.status(400).json(err));
    }

    inserirProdutos = (req, res) => {
        const { id } = req.params;
        const { produtos } = req.body;
        this.vendedorService.inserirProdutos(id, produtos)
            .then(retorno => (retorno ? res.json({ message: "Produtos associados com sucesso." })
                : res.status(404).json({ message: "Vendedor não cadastrado" })))
            .catch(err => res.status(400).json(err));
    }

    removerProdutos = (req, res) => {
        const { id } = req.params;
        const { produtos } = req.body;
        this.vendedorService.removerProdutos(id, produtos)
            .then(retorno => (retorno ? res.json({ message: "Produtos removidos com sucesso." })
                : res.status(404).json({ message: "Vendedor não cadastrado" })))
            .catch(err => res.status(400).json(err));
    }
}
module.exports = new VendedorController(vendedorService);