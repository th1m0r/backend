const produtoService = require('../services/produto.service');

class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }

    listar = (req, res) => {
        this.produtoService.listar()
            .then(produtos => (produtos ? res.json(produtos)
                : res.status(404).json({ mensagem: "Não existem produtos cadastrados." })))
            .catch(err => res.status(400).json(err));
    }

    pesquisar = ({ params: { id } }, res) => {
        this.produtoService.pesquisar(id)
            .then(produto => (produto ? res.json(produto)
                : res.status(404).json({ mensagem: "Produto não cadastrado." })))
            .catch(err => res.status(400).json(err))
    }

    salvar = (req, res) => {
        this.produtoService.salvar(req.body)
            .then(retorno => (retorno ? res.status(201).json({ mensagem: "Produto salvo com sucesso!" })
                : res.status(400).json({ menssagem: "Erro ao salvar produto." })))
            .catch(err => res.status(400).json(err))
    }

    excluir = ({ params: { id } }, res) => {
        this.produtoService.excluir(id)
            .then(retorno => (retorno ? res.json({ mensagem: "Produto excluido com sucesso." })
                : res.status(404).json({ message: "Produto não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }

    alterar = (req, res) => {
        const id = req.params.id;
        this.produtoService.alterar(id, req.body)
            .then(retorno => (retorno[0] ? res.status(201).json({ mensagem: "Produto salvo com sucesso!" })
                : res.status(404).json({ message: "Produto não cadastrado" })))
            .catch(err => res.status(400).json(err))
    }
}
module.exports = new ProdutoController(produtoService);