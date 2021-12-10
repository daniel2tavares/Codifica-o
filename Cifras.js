document.addEventListener('DOMContentLoaded', function(event){
var mensagem = document.getElementById('texto-codi');
var botao = document.getElementById('buttoncoringa');
var escolherCifra = document.getElementById('escolher');

var codificar = document.getElementById('codificado');
var decodificar = document.getElementById('decodificado');

codificar.onclick = function(){
    botao.innerText = 'Codificar';
};
decodificar.onclick = function(){
    botao.innerText = 'Decodificar';
};

escolherCifra.addEventListener('change', function(event){
    var codCifra = escolherCifra.value;
    var passoInputC = document.getElementById('passoInput').classList;
    if(codCifra === 'base'){
        passoInputC.add('oculto')
        
    }
    else if(codCifra === 'cifra'){
        passoInputC.remove('oculto')
    }
})
botao.addEventListener('click', function(event){
    event.preventDefault()
    var calculo = escolherCifra.value
    var msgFinal = ''
    var acao = ''
    if(codificar.checked){
        acao = 'codificar'
    }else if(decodificar.checked){
        acao = 'decodificar'
    }else{
        msgFinal = 'Escolha uma ação'
    }
    if(calculo === 'base'){
        console.log('aqui')
        msgFinal = base64(mensagem.value, acao)
    console.log (msgFinal)

}else if(calculo === 'cifra'){
    var passo = document.getElementById('passoInput').value
    msgFinal = cifraCesar(passo, mensagem.value, acao)
}else{
    msgFinal = 'Escolha uma Cifra'
}
  document.getElementById('resultado').textContent = msgFinal   
})

})
function base64(mensagem, acao){
    let resultado = ''
    console.log(mensagem, acao)
    if(acao==='codificar'){
        resultado = window.btoa(mensagem)
        console.log(resultado)
    }else if(acao==='decodificar'){
        resultado = window.atob(mensagem)
        console.log(resultado)
    }
    return resultado
}


function cifraCesar( passo, mensagem, acao ){
    var arrMensagem = mensagem.split("")
    var arrNum = arrMensagem.map((item) => { return item.charCodeAt(0) })
    var multiplicador = 1;
    if(acao === 'decodificar')
        multiplicador = -1
        
    var arrDeslocado = arrNum.map((item)=>{ return item+(multiplicador*passo) })
    var stringFinal = String.fromCharCode(...arrDeslocado)

    return stringFinal
}