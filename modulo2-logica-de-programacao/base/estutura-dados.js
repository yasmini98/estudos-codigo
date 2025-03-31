console.log("====ESTRUTURA DE DADOS====");

const nome = "Yasmini";
const idade = 26;
const atleta = true;

console.log(nome, nome.constructor); //string
console.log(idade, idade.constructor);  //number
console.log(atleta, atleta.constructor); //boolean

/* const carro1 = "Civic";
const carro2 = "Fusca";
const carro3 = "Mercedes"; */

const objetos = []; //array - vazio

const carros = ["Civic", "Fusca", "Mercedez"];
console.log(carros.constructor);
carros.push("Ferrari"); //add item no final da array
carros.unshift("chevette"); // add item no inicio da array
carros.splice(3, 1, "Corola"); // substitui item na posição x
carros.splice(2, 1) // remove item da posição x
carros.splice(2, 0, "BMW"); //add item na posição x
carros.pop(); //remove ultimo item do array
carros.shift(); //remove primeiro item do array
carros.sort(); //ordena itens do array
carros.reverse(); //inverte os itens do array
const todosOsCarros = (carros.join(" - ")); // transforma o array em string

console.log(carros);
console.log(todosOsCarros);

document.write("<hr><h1>Meus Carros</h1>");

for (let index = 0; index < carros.length; index++) {
    const carro = carros[index];
    console.log(carro);
    document.write(carro, "<br>")
}
document.write("<br>");

carros.sort();
let cont = 0;
while(cont < carros.length){
    document.write(carros[cont], "<br>");
    cont++;
}

function pegaNomeCarro(nomeCarro, posicao) {
    console.log("executou?", nomeCarro, posicao);
}

carros.forEach(pegaNomeCarro);



let frutas = "banana, laranja, uva";
console.log(frutas, frutas.constructor);
frutas = frutas.split(","); //transforma string em array
console.log(frutas);

document.write("<hr>");
function pegaFruta(fruta, index) {
    console.log(arguments);
    document.write((fruta), "<br>");
}

frutas.forEach(pegaFruta);

document.write("<br>");
let nomes = ["Aroldo", "João", "Maria", "Pedro", "Osvaldo"];
console.log(nomes);

nomes.forEach(function(nome, index, lista) {
    console.log("executou?", arguments); // "arguments" é usando para saber quais são os parâmetros usados.
    document.write(index, " ", nome, "<br>");
    console.log(lista[index]);
});

// é questão de boa prática usaruma função anônima quando se quer usar essa função apenas uma vez

document.write("<hr>");

let numeros = [18, 23, 11, 14, 17, 4, 79, 3];
console.log(
    numeros.forEach(function(num) {
        document.write(num, "<br>");
        return num;
    })
);


let filtrados = numeros.filter(function(num) {
    return num < 15 && num > 10;
});


console.log(numeros);
console.log(filtrados);

let dobro = numeros.map(function(num) {
        return num * 2;
    })

console.log(dobro);
console.log(numeros);

console.warn(

    numeros
    .filter(function(num){
        return num >15;
    })
    .map(function (num) {
        return num * 5;
    })
    .sort(function (a, b) {
        return a - b;
    })
    .reverse()
)