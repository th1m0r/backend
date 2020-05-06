const categoriaService = require('../services/categoria.service');

class CategoriaContoller {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }

    listar = (req, res) => {
        this.categoriaService.listar()
            .then(categorias => (categorias ? res.json(categorias)
                : res.status(404).json({ mensagem: "Não existem categorias cadastradas." })))
            .catch(console.log);
    }

}
module.exports = new CategoriaContoller(categoriaService);