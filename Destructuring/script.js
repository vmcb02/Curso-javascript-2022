/*
La desestructuración es una expresión de javascript que hace posible la extracción de datos de arreglos u objetos.

La sintaxis de desestructuración es una expresión de javascript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
*/


const person = {
    name: 'Victor',
    age: 23,
    email: 'vmcb0222@gmail.com'
}


//Forma tradicional

//const name = person.name
//const age = person.age
//const email = person.email


//Destructuring

//const { name: nombre, age: edad, email } = person
//const {name, age, email} = person


//console.log(nombre, edad, email)

//console.log(name, age, email)




//const numbers = [1,2,3,4]

//const [a, b, terceraPosicion] = numbers

//console.log(terceraPosicion)




//const prinPerson = ({ name: nombre }) => {
//    console.log(nombre)
//}

//prinPerson(person)



//Destructuring peticiones a través de axios

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()