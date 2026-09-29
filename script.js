function somaMaior() {
    let A = Number(prompt("Digite o primeiro número: "));
    let B = Number(prompt("Digite o segundo número: "));
    let C = Number(prompt("Digite o terceiro número: "));
    let somaab = Number(A + B);
    if (somaab < C) {
        alert("A soma de A + B é: " + somaab)
    } else {
        alert("Fim!")
    }
}

function tempoCasamento() {
    let name = String(prompt("Digite seu nome completo: ")).toUpperCase();
    let sexo = String(prompt("Masculino (M) ou Feminino (F)?: ")).toUpperCase();
    let estado_civil = String(prompt("Qual seu estado civil?: ")).toUpperCase();
    if (morf === "F" && estado_civil === "Casada") {
        let tempo = Number(prompt("Qual o tempo de casado em anos?: "))
    } else {
        alert("Fim")
    }
}

function imparPar() {
    let n = Number(prompt("Digite um número"))
    if (n % 2 === 0) {
        alert("Par")
    } else if (n % 2 === 1) {
        alert("Impar")
    } else {
        alert("Caractere Inválido");
        imparPar();
    }
}

function valoresIguais() {
    let A = parseInt(prompt("Insira o primeiro número"));
    let B = parseInt(prompt("Digite o segundo número"));
    if (A === B) {
        let C = Number(A + B)
        alert("O resultado é igual a " + C)
    } else {
        let C = Number(A * B)
        alert("O resultado é igual a " + C)
    }
}

function valorPositivoNegativo() {
    let num = Number(prompt("Digite um número"));
    if (num < 0) {
        let result = Number(num * 3);
        alert(result)
    } else if (num > 0) {
        let result = Number(num * 2);
        alert(result)
    } else {
        alert("Inválido")
    }
} 

function valorBooleano() {
    let value_one = String(prompt("O valor um é verdadeiro?: ")).toLowerCase();
    let value_two = String(prompt("O valor dois é verdadeiro?: ")).toLowerCase();
    if (value_one === "sim"){
        value_one = Boolean(true)
    } else {
        value_one = Boolean(false)
    }
    if (value_two === "sim"){
        value_two = Boolean(true)
    } else {
        value_two = Boolean(false)
    }

    if (value_one && value_two === true){
        alert("Ambos são verdadeiros")
    } else if (value_one || value_two === true) {
        alert("Nem todos são verdadeiros")
    } else if (value_one && value_two === false) {
        alert("Ambos são falsos")
    } else {
        alert("Operação Inválida")
    }
}
