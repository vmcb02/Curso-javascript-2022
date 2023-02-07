/*
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable.
*/

//let word = "Hola Mundo"

//console.log(Array.from(word));
//console.log(word.split(""));



/*
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
const letters = ['b', 'c', 'z', 'a']
const numbers = [9,8,100,300,3]

console.log(letters.sort());
console.log(numbers.sort());

console.log(numbers.sort((a,b) => a-b));

function menorMayor(a,b){
    if(a-b < 0) return -1;
    if(a-b > 0) return 1;
    if(a == b) return 0;
}

function mayorMenor(a,b){
    if(b-a < 0) return -1;
    if(b-a > 0) return 1;
    if(b == a) return 0;
}
*/


/*
.forEach(callback(currentValue, [index])) - Ejecuta la función indicada una vez por cada elemento del Array. Bucle..

const numbers = [12,25,47,84,98]

numbers.forEach((number) => console.log(number))
numbers.forEach((number,index)=>
        console.log(`${number} está en la posición ${index}`))
*/


/*
.some(callback) - comprueba si al menos un elemento del array cumple la condición.

const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(words.some(word => word.length>3));
*/


/*
.every(callback) - comprueba si todos los elementos del array cumplen la condición.

const words = ['HTML', 'CSS', 'JavaScript', 'PHP']

console.log(words.every(word => word.length>3));
*/



/*
.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array.


const numbers = [12,25,47,84,98]

const numbers2 = numbers.map(number => number*2)

console.log(numbers2);
*/



/*
.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

const numbers = [12,25,47,84,98]

const numbers2 = numbers.filter(number => number > 80)

console.log(numbers2);
*/



/*
.reduce(callback) - Reduce todos los elementos del array a un único valor.
*/

//const numbers = [12,25,47,84,98]

//console.log(numbers.reduce((a,b)=> a+b))

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    },
]

const usersOnline = users.reduce((cont,user) => {
    if(user.online) cont++
    return cont
},0 )

console.log(`Hay ${usersOnline} usuarios conectados`);








