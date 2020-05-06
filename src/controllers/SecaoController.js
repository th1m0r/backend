const secaoService = require('../services/secao.service');

class SecaoContoller {
    constructor(secaoService) {
        this.secaoService = secaoService;
    }

    listar = (req, res) => {
        this.secaoService.listar()
            .then(secoes => (secoes ? res.json(secoes)
                : res.status(404).json({ mensagem: "Não existem seções cadastradas." })))
            .catch(console.log);
    }

}

module.exports = new SecaoContoller(secaoService);