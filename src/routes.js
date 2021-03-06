const express = require('express');
const EmpresaController = require('./controllers/EmpresaController');
const SecaoController = require('./controllers/SecaoController');
const CategoriaController = require('./controllers/CategoriaController');
const FamiliaController = require('./controllers/FamiliaController');
const ProdutoController = require('./controllers/ProdutoController');
const VendedorController = require('./controllers/VendedorController');
const ClienteController = require('./controllers/ClienteController');
const PedidoController = require('./controllers/PedidoController');

const routes = express.Router();

// CRUD empresa
routes.get('/empresas', EmpresaController.listar);
routes.post('/empresas', EmpresaController.salvar);
routes.get('/empresas/:id', EmpresaController.pesquisar);
routes.delete('/empresas/:id', EmpresaController.excluir);
routes.put('/empresas/:id', EmpresaController.alterar);

// CRUD produto
routes.get('/produtos', ProdutoController.listar);
routes.post('/produtos', ProdutoController.salvar);
routes.get('/produtos/:id', ProdutoController.pesquisar);
routes.delete('/produtos/:id', ProdutoController.excluir);
routes.put('/produtos/:id', ProdutoController.alterar);

//CRUD vendedor
routes.get('/vendedores', VendedorController.listar);
routes.post('/vendedores', VendedorController.salvar);
routes.get('/vendedores/:id', VendedorController.pesquisar);
routes.delete('/vendedores/:id', VendedorController.excluir);
routes.put('/vendedores/:id', VendedorController.alterar);
routes.get('/vendedores/:id/produtos', VendedorController.listarProdutos)
routes.post('/vendedores/:id/produtos', VendedorController.inserirProdutos)
routes.delete('/vendedores/:id/produtos', VendedorController.removerProdutos)

//CRUD cliente
routes.get('/clientes', ClienteController.listar);
routes.post('/clientes', ClienteController.salvar);
routes.get('/clientes/:id', ClienteController.pesquisar);
routes.delete('/clientes/:id', ClienteController.excluir);
routes.put('/clientes/:id', ClienteController.alterar);


//Pedido de venda
routes.get('/pedidos', PedidoController.listar);
routes.post('/pedidos', PedidoController.salvar);
routes.get('/pedidos/:id', PedidoController.pesquisar);
routes.delete('/pedidos/:id', PedidoController.excluir);
routes.put('/pedidos/:id', PedidoController.alterar);



routes.get('/secoes', SecaoController.listar);
routes.get('/categorias', CategoriaController.listar);
routes.get('/familias', FamiliaController.listar);


module.exports = routes;