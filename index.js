//Calculadora de partidas rankeadas
//Utilização de variáveis, operadores, laços de repetição, estruturas de decisões e funções
//Objetivo: criar uma função que receba como parâmetro a quanridade de vitórias e derrotas de um jogador, depois disso, retornar o resultado para uma variaável, o saldo de rankeadas deve ser feito através do cálculo (vitórias-derrotas).

let jogador = "Elisa";
let heroi = "Seraphine";
let vitorias = 24;
let derrotas = 17;
let resultado = saldo(vitorias, derrotas)

function saldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

console.log(`A jogadora ${jogador} com seu herói ${heroi} conquistou o total de: ${vitorias} vitórias e ${derrotas} derrotas. Sendo assim, ela totalizou ${resultado.saldo} vitórias de saldo, o que a leva ao nível ${resultado.nivel} nessa season.`);