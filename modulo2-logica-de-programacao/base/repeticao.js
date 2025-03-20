console.log("====REPETIÇAO====");

document.write("Yas");
document.write("<br>");
document.write(2025, "<br>");

let anoInicial = 2021;
let anoFinal = 2031;

while(anoInicial<=anoFinal){
    document.write(anoInicial, "<br>");
    anoInicial = anoInicial+1;
}

document.write("<hr> <h1>Numeros de 1 a 50</h1>");

let inicial = 1;
let final = 50;

while (inicial<=final){
    document.write(inicial, " - ");
    inicial = inicial + 1;
}

document.write("<hr> <h1>Números de 100 à 1 </h1>")

let numero1 = 1;
let numero100 = 100;

while(numero100 >=numero1){
    document.write(numero100, " - ");
    numero100 = numero100 - 1;
}

document.write("<hr> <h1>Números de 50 à 100 </h1>");
let nInicial = 50;
let nFinal = 100;

while(nInicial<=nFinal){
    if(nInicial<nFinal){
        document.write(nInicial , " - ");
    }else{
        document.write(nInicial);
    }
    nInicial = nInicial+1;
}

document.write("<hr> <h1>Números pares de 1 a 50 </h1>");
let primeiro = 0;
let segundo = 50;

while(primeiro<=segundo){
    if(primeiro<segundo){
        document.write(primeiro , " - ");
    }else{
        document.write(primeiro);
    }
    primeiro = primeiro+2;
}


document.write("<hr> <h1>Números impares de 90 a 1 </h1>");
let noventa = 89;
let um = 1;

while(noventa>=um){
    if(noventa>um){
        document.write(noventa , " - ");
    }else{
        document.write(noventa);
    }
    noventa = noventa-2;
}

<<<<<<< HEAD
document.write("<hr><h1>5 asteriscos em 3 linhas</h1>");

for(let linhas=0; linhas<3; linhas++){
    for(let asteriscos=0; asteriscos<5; asteriscos++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<hr><h1>5 incremento de asteriscos em 10 linhas</h1>");

for(let linhass=0; linhass<=10; linhass++){
    for(let colunass=0; colunass<linhass; colunass++){
        document.write("*");
    }
    document.write("<br>");
}
=======
/* 
exercício: fazer exercicios usando repetição para imprimir isso na tela:
*****
*****
*****
 */
>>>>>>> 894e34e9d7281a71190cc582f7ba539ad110de75
