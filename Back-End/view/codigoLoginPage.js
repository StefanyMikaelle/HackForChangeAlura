import {SERVER_API} from './shared/constantes.js'

const LOGIN_API = 'usuarios/login'
const PAGINA_INICIAL_ROUTE = 'jogos/pagina-inicial'

const botao = document.getElementById('botaoLogin')
const inputEmail = document.getElementById('email')
const inputSenha = document.getElementById('senha')
const mensagemLogin = document.getElementById('mensagemLogin')
const containerMensagemLogin = document.getElementById('containerMensagemLogin')

botao.addEventListener('click', login);

function login() {
    const email = inputEmail.value;
    const senha = inputSenha.value;
    resetaMensagemLogin()

    if (email && senha) {
        axios.post(SERVER_API + LOGIN_API, {login: email, password: senha})
        .then(
            result => {
                // HTML INTEIRO DA NOSSA PAGINA
                document.documentElement.innerHTML = 'LOGIN EFETUADO COM SUCESSO!'
                vaiPraTelaInicial()
            }
        ).catch(
            error => {
                containerMensagemLogin.style.background = 'red'
                mensagemLogin.textContent = 'Acesso inválido. Tente novamente'
            }
        )
    }
}

function resetaMensagemLogin() {
    containerMensagemLogin.style.background = 'transparent'
    mensagemLogin.textContent = ''
}

function vaiPraTelaInicial() {
    window.open(SERVER_API + PAGINA_INICIAL_ROUTE)
}