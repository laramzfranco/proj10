let vetor = [];
let contador = 0;
let soma = 0;

do {
    let num = prompt(`Digite o número ${contador + 1} de 8:`) * 1;
    vetor[contador] = num;
    soma = soma + num;
    contador = contador + 1;
} while (contador < 8);

let media = soma / 8;

alert(`A média é: ${media}`);
alert("Valores acima da média:");

let contadorExibicao = 0;
do {
    if (vetor[contadorExibicao] > media) {
        alert(vetor[contadorExibicao]);
    }
    contadorExibicao = contadorExibicao + 1;
} while (contadorExibicao < 8);