const button = document.getElementById('button')


/*
Objeto window - Es el objeto global, de él descienden todos los objetos
alert()
prompt()
confirm()
*/

/*
if(confirm('Acepta?')) {
    console.log('El usuario acepto');
}
else {
    console.log('El usuario no acepto');
}
*/


/*
Objeto console - Es el objeto que contiene la consola del navegador
console.log()
console.dir()
console.error()
console.table()
*/

const person = {
    name: 'Victor',
    age: 22,
    email:'vmcb0222@gmail.com'
}

//console.table(person)


/*
Objeto location - Es el objeto que contiene la barra de direcciones
location.href
location.protocol
location.host
location.pathname
location.hash
location.reload()
*/
/*
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
//location.reload()
*/
//location.href = 'https://google.com'


/*
Objeto history 

back()
forward()
go(n|-n)

length
*/


/*
Objeto date
*/

//const date = new Date()

//console.log(date)


/*
Timers


Timeout:

setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función después de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

Interval:

setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/*
button.addEventListener('click', () => {
    //setTimeout(saludar,3000)
    const timeout = setTimeout(( )=> {
        console.log('ADIOS')
    },3000)

    clearTimeout(timeout)
})
*/

/*
const timeout = setTimeout(( )=> {
    console.log('ADIOS')
},3000)

button.addEventListener('click', () => {
    clearTimeout(timeout)
})
*/


const saludar = () => {
    console.log('Hola')
}


let cont = 0

//const interval = setInterval(saludar,3000)

const interval = setInterval(() => {
    console.log(cont)
    cont++
},3000)

button.addEventListener('click', () => {
    clearInterval(interval)
})



//tenemos una nueva sintaxis para extraer múltiples propiedades de un arreglo y asignarlas a variables de una sola vez. Ahora tú puedes usar las variables en tu código.

const date = new Date()

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

console.log(month, day, year)
