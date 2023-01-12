const palabra = prompt("Introduce una palabra").toLowerCase()

let consonantes = 0
let vocales = 0


for(letra of palabra){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocales++
    
    else consonantes++
}

console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras`);
