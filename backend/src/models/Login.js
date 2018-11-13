const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario : String,
    senha: String,
    telefone: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);