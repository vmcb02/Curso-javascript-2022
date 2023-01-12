let num = parseInt(prompt("Introduzca un número"))

for(let i=1; i<=num; i++){
if(i % 2 == 0){
    console.log(`${i} - es par`);
}
else{
    console.log(`${i} - es impar`);
}
}