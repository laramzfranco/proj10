let nomes = [];
let contador = 0;

do {
    nomes[contador] = prompt(`Digite o ${contador + 1}º nome:`);
    contador++;
} while (contador < 7);

let resultado = "Nomes na ordem inversa\n";
contador = 6;

do {
    resultado += nomes[contador] + "\n";
    contador--;
} while (contador >= 0);

alert(resultado);
