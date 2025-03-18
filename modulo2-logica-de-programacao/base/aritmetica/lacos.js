// while (enquanto)

//exemplo 1:
/* let var1 = 5;
while (var1 >= 0){
    console.log("while var 1: ", var1);
    var1 -= 1;
}
 */

//exemplo 2:
/* function geraAleatorio(){
    return Math.round(Math.random()*10);
}

let numeroSecreto = geraAleatorio();
while(true){
    const tentativa = prompt("numero");
    if(tentativa == numeroSecreto){
        alert("acertou!");
        break;
    }else{
    console.log(numeroSecreto);
    numeroSecreto = geraAleatorio();
    }
} */


// do-while (enquanto)
let num = 1;
do {
    console.log(`Numero num (do while)= ${num}`)
    num += 1;
} while(num < 5){
    num += 1;
    console.log(`Numero num (do while)= ${num}`)
}
// for (para)

// forEach