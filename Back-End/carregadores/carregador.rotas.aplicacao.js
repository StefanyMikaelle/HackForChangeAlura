const inicializarRotasDeJogos = require('./carregador.rotas.jogos')
const inicializarRotasDeUsuarios = require('./carregador.rotas.usuarios')

class carregadorRotasAplicacao {
 
    static inicializarRotasDaAplicacao(servidor) {
        inicializarRotasDeJogos.inicializarRotasDeJogos(servidor)
        inicializarRotasDeUsuarios.inicializarRotasDeUsuarios(servidor)
    }

}

module.exports = carregadorRotasAplicacao