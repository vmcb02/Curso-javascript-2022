/*
Comodines:
-Sustitución: Define un comodín dentro del patrón. El símbolo es el "."

-Listado de carácteres válidos: Entre corchetes se pone una lista de carácteres válidos. [aeiou] con esto cogeríamos todas las vocales

-Rangos: Entre corchetes si ponemos un guión entre dos carácteres, establecemos un rango. [a-z] todas las letras minúsculas.

-Mezcla entre rangos y listas:
Podemos unir los dos anteriores en una sola expresión. [0-5ou] serían números del 0 al 5, la letra "o" y la letra "u"

-Cadenas completas:
Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabras "lorem" y la palabra "amet"
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi
const regEx2 = new regEx('lorem', 'gi')
const regEx3 = new regEx('/lorem/', 'gi')

console.log(regEx.test(text))
console.log(text.includes('Lorem'))
