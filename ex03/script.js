let nomes = [];
let idades = [];
let contador = 0;

do {
    nomes[contador] = prompt(`Nome da ${contador + 1}ª pessoa:`);
    idades[contador] = prompt(`Idade de ${nomes[contador]}:`) * 1;
    contador = contador + 1;
} while (contador < 9);

alert("--- LISTAGEM DE MENORES DE IDADE ---");

let menoresEncontrados = 0;
let contadorVarredura = 0;

do {
    if (idades[contadorVarredura] < 18) {
        alert(`Nome: ${nomes[contadorVarredura]} | Idade: ${idades[contadorVarredura]} anos`);
        menoresEncontrados = menoresEncontrados + 1;
    }
    contadorVarredura = contadorVarredura + 1;
} while (contadorVarredura < 9);

if (menoresEncontrados == 0) {
    alert("Nenhuma pessoa menor de idade foi cadastrada.");
}