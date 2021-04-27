var codificar = document.querySelector('.codificar');
var decodificar = document.querySelector('.decodificar');
var selected = document.querySelector('.select');
var resultado = document.querySelector('.resultado');
var cod = document.querySelector('.cod');
var decod = document.querySelector('.decod');
var option = document.querySelector('.option');

cod.addEventListener('click', () =>{

    decodificar.classList.add('sumido')
    codificar.classList.remove('desaparecido')
})

decod.addEventListener('click', () =>{

    codificar.classList.add('desaparecido')
    decodificar.classList.remove('sumido')
})




selected.addEventListener('change', () => {

    var valor = selected.value

    if (valor === 'base64') {

        document.querySelector('.incremento').classList.add('invisivel');


        codificar.onclick = () => {

            var mensagem = document.querySelector('.mensagem').value;
            var mensagemCodificada = btoa(mensagem);
            resultado.classList.remove('invisivel')
            resultado.innerHTML = mensagemCodificada
        }

        decodificar.onclick = () => {

            var mensagem = document.querySelector('.mensagem').value;
            var mensagemdeCodificada = atob(mensagem);
            resultado.innerHTML = mensagemdeCodificada
        }
    }

    else if (valor === 'cifras') {

        document.querySelector('.incremento').classList.remove('invisivel');

        codificar.onclick = () => {

            var mensagem = document.querySelector('.mensagem').value
            var incremento = document.querySelector('.inc').value
            var letra = mensagem.split('')
            var code = []
            var codeX = []
            var charCode = []
            console.log(incremento)

            for (var i = 0; i < letra.length; i++) {

                code.push(letra[i].charCodeAt())
            }
            for (var i = 0; i < code.length; i++) {

                codeX.push(parseInt(code[i]) + parseInt(incremento))
            }
            for (var i = 0; i < codeX.length; i++) {

                charCode.push(String.fromCharCode(codeX[i]))
            }
            var result = charCode.join('')
            resultado.classList.remove('invisivel')
            resultado.innerHTML = result
        }
        decodificar.onclick = () => {

            var mensagem = document.querySelector('.mensagem').value
            var incremento = document.querySelector('.inc').value
            var letra = mensagem.split('')
            var code = []
            var codeX = []
            var charCode = []
            console.log(incremento)
            for (var i = 0; i < letra.length; i++) {
                code.push(letra[i].charCodeAt())
            }
            for (var i = 0; i < code.length; i++) {
                codeX.push(parseInt(code[i]) - parseInt(incremento))
            }
            for (var i = 0; i < codeX.length; i++) {
                charCode.push(String.fromCharCode(codeX[i]))
            }
            var result = charCode.join('')
            resultado.classList.remove('invisivel')
            resultado.innerHTML = result
        }
    }
    else if (valor === 'option'){

        document.querySelector('.incremento').classList.add('invisivel');
    }
})
