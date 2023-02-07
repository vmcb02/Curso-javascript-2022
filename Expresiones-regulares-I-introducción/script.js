/*
Sintaxis:
       /patron/
Banderas:
i: ignore case. No diferencia entre mayúsculas y minúsculas
g: global. Busca de forma global, es decir, no se para después de la primera coincidencia 
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi

console.log(regEx.test(text))
console.log(text.includes('Lorem'))
