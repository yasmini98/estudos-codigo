console.log("====OBJETOS LITERAIS====");

// CONCEITO - O que é um objeto?
/* 
        __________
        | OBJETO |
        __________
        /        \
    CARACTS     AÇÕES

        __________
        | CARRO |
        __________
        /        \
    PROPRI.     MÉTODOS
    preço       ligar()
    cor         desligar()
    modelo      soltarFreioDeMao()
    fabricante  acelerar()
    motor       freiar()
    tamanho     buzinar()
    ano
 */

const carro = {};

// Dot notation
// objeto.propriedade; --> ler prop
// objeto.propriedade = valor; --> criar prop
carro.modelo = "Fusca";
carro.cor = "laranja";
carro.ano = 1978;

// obejto.metodo(); --> executar metodo
// objeto.metodo = function() {}; --> criar metodo
carro.ligar = function(){
    return "ON";
};
carro.desligar = function(){
    return "OFF";
};

// Bracket Notation
// objeto["propriedade"]; --> ler prop
//objeto["propriedade"] = valor; --> criar prop
carro["preco"] = 10000;
carro["fabricante"] = "volkswagen";
carro["motor"] = 1500;

// objeto["método"]() --> executar metodo
// objeto["método"] = function() --> criar metodo
carro["buzinar"] = function() {
    return "BI BI...";
}
carro["acelerar"] = function() {
    return "VRUMMM";
}

console.log( carro);
console.log( carro.modelo, carro["modelo"] ); // lendo props
console.log( carro.ligar(), carro["ligar"]()); // executando metodos
