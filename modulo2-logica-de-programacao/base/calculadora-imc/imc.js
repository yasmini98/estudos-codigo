function imc(){
    const peso = document.getElementById('peso').value; //pega valor de peso
    const altura = document.getElementById('altura').value; //pega valor de altura
<<<<<<< HEAD
    const resultado = document.getElementById('resultado'); //pega valor de resultado no html
    const imc = parseFloat(peso / (altura * altura)); //calcula o imc
    resultado.value = imc.toFixed(2); //exibe o resultado no html do imc com 2 casas decimais
    console.log(imc); 


    // Para Classificar
    const classificacao = document.getElementById('classificacao');
    if(imc < 18.5){
        classificacao.value = "Abaixo do Peso";
    } else if(imc >= 18.5 && imc < 25){
        classificacao.value = "Peso Normal";
    } else if(imc >= 25 && imc < 30){
        classificacao.value = "Sobrepeso";
    } else if(imc >= 30 && imc < 35){
        classificacao.value = "Obesidade Grau 1";
    } else if(imc >= 35 && imc < 40){
        classificacao.value = "Obesidade Grau 2";
    } else if(imc >= 40){
        classificacao.value = "Obesidade Grau 3";
    }
    console.log(classificacao.value);
}

/* 

&& = E
false && false -> false
false && true -> false
true && false -> false  
true && true -> true

|| = OU
false || false -> false
false || true -> true
true || false -> true
true || true -> true

*/
=======
    const resultado = document.getElementById('resultado'); //pega valor de resultado
    const imc = peso / (altura * altura); //calcula o imc
    resultado.value = imc.toFixed(2); //exibe o resultado do imc com 2 casas decimais
}
>>>>>>> 840037239b8b5253528d834e7633554e455fc70a
