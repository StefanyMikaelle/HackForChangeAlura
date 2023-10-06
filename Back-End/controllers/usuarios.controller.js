const {Usuarios} = require('../bancoDeDados/models')

class usuariosController {

    cadastrar = async (requisicao, resposta) => {
        const usuarioASerCadastrado = requisicao.body;
        
        if (!usuarioASerCadastrado.login) {
            return resposta.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. LOGIN DO USUÁRIO É VAZIO'})
        }

        if (!usuarioASerCadastrado.password) {
            return resposta.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. SENHA DO USUÁRIO É VAZIA'})
        }

        if (!usuarioASerCadastrado.nome) {
            return resposta.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. NOME DO USUÁRIO É VAZIO'})
        }

        return resposta.status(200).json(await Usuarios.create(usuarioASerCadastrado))
    }

    obterTodos = async (requisicao, resposta) => {
        return resposta.status(200).json(await Usuarios.findAll())
    }
    
    login = async (requisicao, resposta) => {
        const login = requisicao.body;
        console.log(login);
        const possivelUsuario = await Usuarios.findAll(
            {
                where: {
                    login: login.login,
                    password: login.password
                }
            }
        );

        if (!possivelUsuario || possivelUsuario.length < 1) {
            return resposta.status(401).json({message: 'ACESSO INVÁLIDO. POR FAVOR, INFORME CORRETAMENTE SUAS CREDENCIAIS'})
        }

        return resposta.status(200).json({})
    }

    validaSeOUsuarioExiste = async (usuario) => {
        const possivelUsuario = await Usuarios.findAll(
            {
                where: {
                    login: usuario.login,
                    password: usuario.password
                }
            }
        );

        return possivelUsuario && possivelUsuario.length > 0;
    }
}

module.exports = new usuariosController;