console.log("====FUNÇÕES V2====");

// ECMASCRIPT (ATÉ ES5)

function soma(a, b) {
    return a + b;
}

var som = function(a, b){
    return a + b;
}

// ECMASCRIPT (>= ES6)

// Arrow Function

const multiply = (x, y) => {
    return x * y;
}

const sum = (a, b) => a + b;

const maiusculas = texto => texto.toUpperCase();

const dobro = () => 5 * 2;

//exemplos

const numbers = [2, 8, 6, 25, 33, 1, 12];
console.log(numbers);

numbers.forEach(number => console.log(number))

const filtered = numbers.filter(num => num < 10);
console.log(filtered);

console.log(
    numbers
    .sort((a,b) => a - b)
    .filter(num => num > 10)
    .map(num => num * 2)
)

// DESAFIO

// input
var strHead = "CPF|DATA|NOM-TIt|DAT_ANVR_TIT|NOM_MAE|NUM_DDD_TEL_CEL|NUM_TEL_CEL|NUM_DDD_TEL_FIX|NUM_TEL_FIX|NOM_LOGR|NOM_LOGR|NOM_CPL_LOGR|NUM_CEP_LOGR|NOM_BRR_ENDR|NOM_MUN_ENDR|UF_ENDR|NOM_END_EMAIL|CANAL|MOTIVO_RECUSA|STATUS";
console.log(strHead, strHead.constructor);

/* var splitStr = strHead.split("|"); // para quebrar o string pelo "|"
//para formatar os elementos para camelCase
var camelCaseStr = splitStr.map(function(item,index){
    return item
    .toLowerCase() // torna tudo minusculo
    .replace(/_([a-z])/g, function(g) {return g[1].toUpperCase(); })
    .replace(/(^|\s)([a-z])/g, function(g) { return g.toUpperCase(); }); //torna a primeira letra maiúscula
});

console.log(camelCaseStr); */

console.log(
    strHead.split("|").map((field) =>{
        return field.toLowerCase().split("_").map((desc, i) => {
            /* if(i==0){
                return desc;
            }else{
                return desc.charAt(0).toUpperCase()+desc.slice(1);
            } */
           return (i==0) ? desc : desc.charAt(0).toUpperCase() + desc.slice(1);
        }).join("");
    })
)

// Ternário

//(condicao_logica) ? valor_verdadeiro : valor_falso;
