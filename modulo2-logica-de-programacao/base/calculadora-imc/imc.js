function imc(){
    const peso = document.getElementById('peso').value; //pega valor de peso
    const altura = document.getElementById('altura').value; //pega valor de altura
    const resultado = document.getElementById('resultado'); //pega valor de resultado
    const imc = peso / (altura * altura); //calcula o imc
    resultado.value = imc.toFixed(2); //exibe o resultado do imc com 2 casas decimais
}