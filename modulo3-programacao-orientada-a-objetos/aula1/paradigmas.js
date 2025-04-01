console.log("====PARADIGMAS====");

//trasicional - literal (Implícito)
const escola = "UFRN";
console.log(escola);

const desde = 1958;
console.log(desde, typeof desde, desde.constructor);

const tecnologias = ["html", "css", "javascript"];
console.log(tecnologias, typeof tecnologias, tecnologias.constructor);


//alternativo - OOP ou POO
const school = new String("UFRN");
console.log(school, typeof school, school.constructor);

const since = new Number(1958)
console.log(since, typeof since, since.constructor);

const tecnologies = new Array("html", "css", "javascript");

//uma vez que você conhece o construtor, você sabe qual API utilizar

console.dir(String.prototype); //API String
console.dir(Number.prototype); //API Number
console.dir(Array.prototype); //API Array

//Exemplos
console.log(escola.anchor("https://www.ufrn.br/"));
console.log(school.anchor("https://www.ufrn.br/"));