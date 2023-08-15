var nome
var email
var num = 0;
saldo = 1000;
var saque = 0;

function sacar(saque){
    saldo = saldo - saque
    return saldo
}

function depositar(deposito){
    saldo = saldo + deposito
    return saldo
}

function escrever(quadro){
    info = "Usuário número " + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "E-mail: " + email + "\n";
    info += "Saldo com deposito: " + depositar(deposito) + "\n";
    info += "Saldo com saque: " + sacar(saque) + "\n \n";
    quadro.value += info
}