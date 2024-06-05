let numerosSorteado = []
let numeroLimite = 10
let numSecreto = gerarNumeroAleatorio()
let tentativas = 1
 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numSecreto) {
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
        exibirTextoNaTela('h1', 'Parabéns')
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numSecreto) {
            exibirTextoNaTela('p', 'O número é menor')
        }else {
            exibirTextoNaTela('p', 'O número é maior')
        }
        tentativas++
        limparCampo()
    }

}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let qtdDeElementosDaLista = numerosSorteado.length
    //limpando a lista
    if (qtdDeElementosDaLista == numeroLimite) {
        numerosSorteado = []
    }
    //verificando se a lista de numeros sorteados inclui o numeroEscolhido no math random
    if(numerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        numerosSorteado.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo(){
    numSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

