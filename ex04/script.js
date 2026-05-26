const vetor1 = [];
const vetor2 = [];
const resultado = [];

// 2. Leitura dos 5 elementos do Vetor 1
alert("Vamos preencher o Vetor 1");
for (let i = 0; i < 5; i++) {
    // O Number() garante que o texto digitado seja convertido em número inteiro
    const valor = Number(prompt("Digite o " + (i + 1) + "º número do Vetor 1:"));
    vetor1.push(valor);
}

// 3. Leitura dos 5 elementos do Vetor 2
alert("Vamos preencher o Vetor 2");
for (let i = 0; i < 5; i++) {
    const valor = Number(prompt("Digite o " + (i + 1) + "º número do Vetor 2:"));
    vetor2.push(valor);
}

// 4. Lógica da interseção (sem repetição)
for (let i = 0; i < vetor1.length; i++) {
    const elemento = vetor1[i];

    // Se o elemento existe no vetor2 E ainda não está no resultado
    if (vetor2.includes(elemento) && !resultado.includes(elemento)) {
        resultado.push(elemento);
    }
}

// 5. Exibe o resultado na tela
alert("Vetor 1: [" + vetor1.join(", ") + "]\n" + "Vetor 2: [" + vetor2.join(", ") + "]\n\n" + "Resultado -> [" + resultado.join(", ") + "]");