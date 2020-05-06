const express = require('express');
const EmpresaController = require('./controllers/EmpresaController');
const SecaoController = require('./controllers/SecaoController');
const CategoriaController = require('./controllers/CategoriaController');
const FamiliaController = require('./controllers/FamiliaController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ hello: "world!" }))

routes.get('/empresas', EmpresaController.listar);
routes.post('/empresas', EmpresaController.salvar);
routes.get('/empresas/:id', EmpresaController.pesquisar);
routes.delete('/empresas/:id', EmpresaController.excluir);
routes.put('/empresas/:id', EmpresaController.alterar);

routes.get('/secoes', SecaoController.listar);

routes.get('/categorias', CategoriaController.listar);

routes.get('/familias', FamiliaController.listar);

module.exports = routes;