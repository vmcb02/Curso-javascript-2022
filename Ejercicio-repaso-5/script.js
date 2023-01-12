let num = parseInt(prompt("Introduzca un número"))
let result = 1;

for(let i = num; i>0; i--){
   result *= i;
}
console.log(`El factorial de ${num} es ${result}`);