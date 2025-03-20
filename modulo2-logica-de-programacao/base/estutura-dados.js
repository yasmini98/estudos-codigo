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


/* 
document.write(carros[0], "<br>");
document.write(carros[1], "<br>");
document.write(carros[2], "<br>"); 
*/