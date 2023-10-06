const express = require('express')
const cors = require('cors')
const carregadorRotasAplicacao = require('./carregadores/carregador.rotas.aplicacao')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

const porta = 4500
const servidor = express()

servidor.use(express.static('view'))
servidor.use(express.json())
servidor.use(cors(corsOptions))

servidor.listen(porta, aoIniciarServidor)


function aoIniciarServidor() {
    console.log('servidor iniciado na porta ' + porta)
}


carregadorRotasAplicacao.inicializarRotasDaAplicacao(servidor)
