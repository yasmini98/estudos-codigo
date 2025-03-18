console.log("=== FUNCOES ===");

// Declaração de Função Nomeada:
// ES6 => default parameter
function soma(a=0,b=0) {
    const result = a + b;
    return result;
}
// Executar a função:
soma();
console.log( soma() );
console.log( soma(8, 12) );

// Declaração de Função Anônima:
const sum = function (a=0,b=0) {
    return a + b;
}
// Executar a função:
sum();
console.log( sum() );