let num = parseInt(prompt("Introduzca un número"))
let divisores = 0;

if(num == 1) console.log(`El número no es válido`);

else{
for(let i=2; i<num; i++){
    if(num % i == 0){
        console.log(`${num} / ${i} = ${num/i} No es primo`);
        divisores++
        break;
    }
}
}
if(divisores == 0) console.log(`${num} es primo`);