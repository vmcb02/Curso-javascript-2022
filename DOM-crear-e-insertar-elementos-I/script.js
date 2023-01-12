//DOM - crear e insertar elementos

/*
Crear un elemento: document.createElement(element)

Escribir texto en un elemento: element.textContent = texto

Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/


const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')
/*
const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList)
*/


title.innerHTML = 'DOM - <span>crear e insertar elementos I</span>'


const fragment = document.createDocumentFragment()
/*
for(const day of days){
    const itemList = document.createElement('LI')
itemList.textContent = day
fragment.appendChild(itemList)
}
*/

for(const day of days){
    const sonList = document.createElement('OPTION')
    sonList.setAttribute('value', day.toLowerCase())
    sonList.textContent = day
    fragment.appendChild(sonList)
}

selectDays.appendChild(fragment)

//daysList.appendChild(fragment)