const {SERVER_BASE_URL} = require('../shared/server.constants')
const usuariosController = require('../controllers/usuarios.controller')

class carregadorRotasUsuarios {
 
    static inicializarRotasDeUsuarios(servidor) {
        const ENTITY_NAME = 'usuarios/'
        servidor.post(SERVER_BASE_URL + ENTITY_NAME + 'login', usuariosController.login)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar', usuariosController.obterTodos)
        servidor.post(SERVER_BASE_URL + ENTITY_NAME + 'cadastrar', usuariosController.cadastrar)
    }

}

module.exports = carregadorRotasUsuarios