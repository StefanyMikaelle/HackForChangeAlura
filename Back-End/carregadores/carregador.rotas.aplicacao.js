const inicializarRotasDeUsuarios = require('./carregador.rotas.usuarios')

class carregadorRotasAplicacao {

    static inicializarRotasDaAplicacao(servidor) {
        inicializarRotasDeUsuarios.inicializarRotasDeUsuarios(servidor)
    }

}

module.exports = carregadorRotasAplicacao
