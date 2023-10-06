const jogosController = require('../controllers/jogos.controller')
const {SERVER_BASE_URL} = require('../shared/server.constants')

class carregadorRotasJogos {
 
    static inicializarRotasDeJogos(servidor) {
        const ENTITY_NAME = 'jogos/'

        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar', jogosController.consultar)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar-by-id/:id', jogosController.consultarPeloId)
        servidor.post(SERVER_BASE_URL + ENTITY_NAME + 'cadastrar', jogosController.cadastrar)
        servidor.put(SERVER_BASE_URL + ENTITY_NAME + 'atualizar', jogosController.atualizar)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-inicial', jogosController.telaInicial)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-cadastro', jogosController.telaFormulario)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'pagina-edicao/:id', jogosController.telaFormulario)
    }

}

module.exports = carregadorRotasJogos