console.log("====FUNCOES REVISAO====")

/* 
instrucao(); //funcao
instrucao(parametro); //funcao com parametro
instrucao(param1, param2); //funcao com dois parametros

contexto.instrucao(); //funcão que só gatilha com o contexto
contexto.instrucao(parametro); //funcão com parametro que só gatilha com o contexto 
contexto.instrucao(param1, param2); //funcão com parametro que só gatilha com o contexto 
 */


//declaração nomeada
function converterParaMaiuscula(input = "") {
    // let nome = input;
    return input.toUpperCase();
}
//input : yasmini
//output: YASMINI

function converterParaMinuscula(input = "") {
    // let nome = input;
    return input.toLowerCase();
}

function converteParaReal(valor=0){
    return "R$" + valor.toFixed(2).replace("." , ",");
}

function converteParaDolar(real=0,cotacao=1){
    return "R$" + (real/cotacao).toFixed(2).replace("." , ",");
}
function converteDolarParaReal(dolar=0,cotacao=1){
    return "R$" + (dolar*cotacao).toFixed(2).replace("." , ",");
}

function converter() {
    const funcionario = document.getElementById("funcionario").value;
    const salario = document.getElementById("salario").value;

    console.log(funcionario);
    console.log(salario);
    
    document.getElementById("fulano").textContent = converterParaMaiuscula(funcionario);
    document.getElementById("reais").textContent = converteDolarParaReal(parseFloat(salario));
    document.getElementById("dolar").textContent = converteParaDolar(parseFloat(salario), 5.3);
}