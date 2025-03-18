console.log("==== OPERADORES ====");

const var1 = 5;
const var2 = 10;

if(var1 > 3 && var2 > 8){
    console.log("1 verdadeiro");
}

if(var1 >3 && var2 < 8){
    console.log("2 verdadeiro");
}

if(var1 > 3 || var2 < 8){
    console.log("3 verdadeiro");
}

console.log(var1 >= 3);
console.log(var1 < 3);

console.log(var1 == var2);
console.log(var1 != var2);

const var3 = 1;
const var4 = true;
console.log(var3==var4)
console.log(var3 === var4);

console.log(0 == undefined);