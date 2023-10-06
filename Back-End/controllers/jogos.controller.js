const {Jogos, Plataformas} = require('../bancoDeDados/models')

class jogosController {
    consultar = async (requisicao, resposta) => {
        let jogosConsultados = [] 

        try {
            jogosConsultados = await Jogos.findAll({
                include: [Plataformas]  
              })
        } catch (error) {
            console.log(error)
        }
        
        return resposta.status(200).json(jogosConsultados);
    }

    consultarPeloId = async (requisicao, resposta) => {
        const jogoId = requisicao.params.id
        console.log(jogoId)
        return resposta.status(200).json(await Jogos.findByPk(jogoId));
    }

    cadastrar = async (requisicao, resposta) => {
        const jogo = requisicao.body;

        if (!jogo.nome) {
            return resposta.status(400).json({message: 'O JOGO DEVE TER UM NOME PREENCHIDO!'})
        }

        return resposta.status(200).json(await Jogos.create(jogo));
    }

    atualizar = async (requisicao, resposta) => {
        const jogo = requisicao.body;
        const jogoModel = await Jogos.findByPk(jogo.id)

        if (!jogo.nome) {
            return resposta.status(400).json({message: 'O JOGO DEVE TER UM NOME PREENCHIDO!'})
        }

        return resposta.status(200).json(await jogoModel.update(jogo));
    }

    telaInicial = (requisicao, resposta) => { 
        resposta.set('Content-Type', 'text/html')
        resposta.sendFile('C:/Users/Lacav/Desktop/GAMERANKING_PROJECT/view/jogos/pagina-jogos.html')
    }

    telaFormulario = (requisicao, resposta) => { 
        resposta.set('Content-Type', 'text/html')
        resposta.sendFile('C:/Users/Lacav/Desktop/GAMERANKING_PROJECT/view/jogos/cadastro/cadastro-jogos.html')
    }
}

module.exports = new jogosController;