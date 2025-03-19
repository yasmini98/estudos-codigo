console.log("====CONDICIONAIS====")

// alert("Boa noite!");

/* 
const maiorDeIdade = confirm("você é maior de idade?");
console.log(maiorDeIdade)

if(maiorDeIdade){
    console.log("ACESSO PERMITIDO")
}else{
    console.log("ACESSO NEGADO")
}
 */

/* 
const idade = prompt("Por favor digite sua idade");
console.log(idade);

if(idade>=18){
    console.log("você é adulto");
}else if(idade<13){
    console.log("você é criança");
}else{
    console.log("você é adolescente");
} 
*/
const idade = document.getElementById("idade").value;
console.log(idade);
let classificacao = "idade indefinida";

if(idade>=18){
    console.log("você é adulto");
    classificacao = "adulto";
}else if(idade<13){
    console.log("você é criança");
    classificacao = "criança";
}else{
    console.log("você é adolescente");
    classificacao = "adolescente";
} 

// ======SWITCH======

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const mes = parseInt(prompt("mes"));
console.log(typeof mes, mes);
switch (mes) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FE1V");
        break;
    case 3:
        console.log("MAR");
        break;
    case 4:
        console.log("ABR");
        break;

    default:
        console.log("ainda não ordenei esse mês no switch");
        break;
}