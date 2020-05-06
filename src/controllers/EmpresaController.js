const empresaService = require('../services/empresa.service');

class EmpresaController {
    constructor(empresaService) {
        this.empresaService = empresaService;
    }

    listar = (req, res) => {
        this.empresaService.listar()
            .then(empresas => (empresas ? res.json(empresas)
                : res.status(404).json({ mensagem: "Não existem empresas cadastradas." })))
            .catch(console.log);
    }

    pesquisar = ({ params: { id } }, res) => {
        this.empresaService.pesquisar(id)
            .then(empresa => (empresa ? res.json(empresa)
                : res.status(404).json({ mensagem: "Empresa não encontrada" })))
            .catch(err => res.status(400).json(err))
    }

    salvar = (req, res) => {
        this.empresaService.salvar(req.body)
            .then(retorno => (retorno ? res.status(201).json({ mensagem: "Empresa salva com sucesso!" })
                : res.status(400).json({ menssagem: "Erro ao salvar empresa." })))
            .catch(err => res.status(400).json(err))
    }

    excluir = ({ params: { id } }, res) => {
        this.empresaService.excluir(id)
            .then(retorno => (retorno ? res.json({ mensagem: "Empresa excluida com sucesso." })
                : res.status(404).json({ message: "Empresa não cadastrada" })))
            .catch(err => res.status(400).json(err))
    }

    alterar = (req, res) => {
        const id = req.params.id;
        this.empresaService.alterar(id, req.body)
            .then(retorno => (retorno[0] ? res.status(201).json({ mensagem: "Empresa salva com sucesso!" })
                : res.status(404).json({ message: "Empresa não cadastrada" })))
            .catch(err => res.status(400).json(err))
    }

}

module.exports = new EmpresaController(empresaService);