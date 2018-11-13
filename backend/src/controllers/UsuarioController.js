const Usuario = require('../models/Usuario');

module.exports = {

    async index(req, res) {

        const usuarios = await Usuario.find({});

        return res.json(usuarios);
    },

    async store(req, res) {

        const existe = await Usuario.find({usuario: req.body.usuario});

        if(existe.length){
            return res.json({ result: false, content: "Nome usuário já cadastrado"});
        }

        const usuario = await Usuario.create(req.body);

        return res.json(usuario);
    },

    async login(req, res) {

        const { usuario } = req.body;
        const { senha } = req.body;
        const ret = {
            result : false, };
        
        const usuarios = await Usuario.find({usuario: usuario}, (err, docs) => {
            if(err){
                console.log(err);
            }
        });

        
        if(usuarios.length > 0){
            ret.result = true;
            ret.content = usuarios;
        }

        return res.json(ret);
    },

}