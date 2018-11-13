const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    usuario: String,
    senha: String, 
    profissao: String,
    dataDeNascimento: Date,
    descricao: String,
    imagemDePerfil: String,
    curtidoPor: []
});

module.exports = mongoose.model('Usuario', UsuarioSchema);