const express = require('express');
const routes = express.Router();
const controle = require('../controller/VeiculoCont');


routes.route('/veiculos').get(controle.listar);
routes.route('/veiculos').post(controle.incluir);
routes.route('/veiculos').put(controle.alterar);
routes.route('/veiculos/:id').delete(controle.excluir);
routes.route('/veiculos/:id').get(controle.obterPeloId);
routes.route('/veiculos/filtro/:filtro').get(controle.filtrar);


module.exports = routes;