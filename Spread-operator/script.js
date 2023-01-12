/*
Spread Operator ( Operador de expansión)

Su sintaxis es ...
*/
/*
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(...numbers);
*/

//Enviar elementos en un array a una función
/*
const addNumbers = (a, b, c) => {
    console.log(a+b+c);
}

let numbersToAdd = [1,2,3]

addNumbers(...numbersToAdd)
*/


//Añadir un array a otro array
/*
let users = ["Javier", "David", "Rosa", "Juan", "Mercedes"]

let newUsers = ["Marta", "Jaime", "Laura"]

users.push(...newUsers)

console.log(users);
*/



//Copiar arrays
/*
let arr1 = [1,2,3,4]

let arr2 = [...arr1]

console.log(arr2);
*/



//Concatenar arrays
/*
let arr1 = [1,2,3,4,5]

let arr2 = [6,7,8]

let arrConcat = [...arr1, ...arr2]

console.log(arrConcat);

console.log([...arr1, ...arr2]);
*/



//Enviar un número indefinido de argumentos a una función (parámetros REST)
/*
const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,6,7,8,9,10)
*/



//Librería math
/*
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
*/


//Eliminar elementos duplicados

const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log([...new Set(numbers)]);




