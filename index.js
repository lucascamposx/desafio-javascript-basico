function soma(numero1,numero2) {
    const soma = numero1 + numero2
    return  'A soma dos dois números é: ' + soma
}

function divisao(numero1,numero2) {
    const divisao = numero1 / numero2
    return  'A divisao dos dois números é: ' + divisao
}

function multiplicacao(numero1,numero2) {
    const multiplicacao = numero1 * numero2
    return  'A multiplicacao dos dois números é: ' + multiplicacao
}

function subtracao(numero1,numero2) {
    const subtracao = numero1 - numero2
    return  'A subtracao dos dois números é: ' + subtracao
}


let resultadoDaSoma = soma(10,2)
console.log(resultadoDaSoma);

let resultadoDaDivisao = divisao(10,2)
console.log(resultadoDaDivisao);

let resultadoDaMultiplicacao = multiplicacao(10,2)
console.log(resultadoDaMultiplicacao);

let resultadoDaSubtracao = subtracao(10,2)
console.log(resultadoDaSubtracao);