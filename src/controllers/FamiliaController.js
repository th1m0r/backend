const familiaService = require('../services/familia.service');

class FamiliaContoller {
    constructor(familiaService) {
        this.familiaService = familiaService;
    }

    listar = (req, res) => {
        this.familiaService.listar()
            .then(familias => (familias ? res.json(familias)
                : res.status(404).json({ mensagem: "Não existem famílias cadastradas." })))
            .catch(console.log);
    }

}

module.exports = new FamiliaContoller(familiaService);