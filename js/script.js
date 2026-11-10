let saldo = 1000;
var nomeCliente = prompt("Qual é o seu nome?");
const nomeBanco = "Banco UniparBank";
let telefoneCliente = null;
let observacaoCliente;

console.log(telefoneCliente);
console.log(observacaoCliente);

// function usoVarLet() {
//     let valor = 20;

//     if(true) {
//         var outroValor = 30;
//         console.log(valor);
//         console.log(outroValor);
//     }
//     console.log(valor);
//     console.log(outroValor);
// }

// usoVarLet();

if (nomeCliente === null || nomeCliente.trim() === "") {
    nomeCliente = "Cliente";
}

const conta = {
    banco: nomeBanco,
    titular: nomeCliente
};

document.getElementById("boasVindas").textContent =
    `Olá, ${nomeCliente.toUpperCase()} ! Bem-Vindo ao ${nomeBanco}.`;

    function formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

function depositar() {
    let valorDigitado = prompt("Quanto deseja depositar?");
    let valor = Number(valorDigitado);
    let confirmar = confirm(
        `Confirma o depósito de ${formatarMoeda(valor)}?`
    );

    if (valorDigitado === null) {
        alert("Operação cancelada.");
    } else if (Number.isNaN(valor) || valor <= 0) {
        alert("Digite um valor numérico maior que zero.");
    } else if (confirmar === true) {
        saldo = saldo + valor;

        atualizarSaldo();

        document.getElementById("mensagem").textContent =
        `Depósito de ${formatarMoeda(valor)} realizado com sucesso!`;
    } else {
        alert("Depósito não confirmado.");
    }
}
