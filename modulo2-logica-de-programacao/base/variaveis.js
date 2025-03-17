console.log("=== VARIAVEIS ===");

// Javascript (ECMAScript)
// Até 2015 (jun/jul) - ES5 (var)
// Após jun/jul 2015 - ES6 (let, const)
// linguagem interpretada e não compilada

// var, let, const

let universidade = "UFRN"; //string
console.log("universidade", universidade, typeof universidade);

let fundacao = 1960; //number
console.log("fundacao", fundacao, typeof fundacao);

const federal = true; //boolean
console.log("cidade", federal, typeof federal);

let nula = null; //null
console.log("nula", nula, typeof nula);

let indefinida = undefined; //undefined
console.log("indefinida", indefinida, typeof indefinida);

// diferenças entre var, let e const

/* var universidade = 2000; 
console.log("universidade", universidade);

var fundacao = 1970;
console.log("fundacao", fundacao); */
//proibido redeclarar variaveis let

universidade = 2000;
console.log("universidade", universidade); 
//é permitido reatribuir valores

let nome = "Maria"; // declarou a variável
nome = "José"; // reatribuiu o valor

/* federal = false;  */
//erro, pois const, além de não permitir redeclaração, não permite reatribuição

