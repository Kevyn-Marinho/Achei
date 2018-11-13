const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

mongoose.connect('mongodb://admin:marinho010@ds157923.mlab.com:57923/dateapp', {
    useNewUrlParser: true
});

// Isso é um Middleware aqui
// app.use((req, res, next) => {
//     req.io = io;

//     return next();
// });

app.use(cors());

app.use(express.json());

app.use(require('./routes'));

server.listen(3000, () => {
    console.log('server started on port 3000');
});