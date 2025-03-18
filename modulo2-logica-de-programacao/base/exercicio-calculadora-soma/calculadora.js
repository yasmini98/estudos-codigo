console.log("=== CALCULADORA ===");

function calcular() {
    console.log("clicou no botão");
    // vamos pegar os valores do html usando a palavra "document" e a função "getElementById"
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    // console.log(numero1.value, numero2.value);

    const result = parseInt(numero1.value) + parseInt(numero2.value);
    // console.log(result);

    const resultado = document.getElementById("resultado");
    // console.log(resultado);

    resultado.value = result;
}