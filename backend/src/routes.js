const express = require('express');

const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');


// Rotas
routes.get('/usuarios',UsuarioController.index);
routes.post('/usuarios',UsuarioController.store);
routes.post('/login',UsuarioController.login);

module.exports = routes;
