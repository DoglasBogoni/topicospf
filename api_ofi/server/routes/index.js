const { Router } = require("express");
const routes = Router();
// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));
const veiculoRout = require("./VeiculoRout");
routes.use("/api", veiculoRout);
module.exports = routes;