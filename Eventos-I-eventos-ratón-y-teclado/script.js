/*
Eventos de ratón

click - Cuando pulsamos el botón izquierdo del ratón
dblclick - Cuando pulsamos dos veces seguidas el botón izquierdo del ratón
mouseenter - Cuando entramos en la zona que tiene el evento
mouseleave - Cuando salimos de la zona que tiene el evento 
mousedown - Cuando pulsamos y no soltamos el botón izquierdo del ratón
mouseup - Cuando soltamos el botón izquierdo del ratón
mousemove - Cuando movemos el ratón

Eventos de teclado

keydown - Cuando pulsamos una tecla
keyup - Cuando soltamos una tecla
keypress - Cuando pulsamos una tecla y no la soltamos
*/


const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')
/*
button.addEventListener('click', () => {
    console.log('CLICK')
})
*/

/*
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK')
})
*/

/*
box.addEventListener('mouseenter', () => {
    box.classList.replace('red', 'green')
})

box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red')
})
*/

/*
box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA')
})


box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTON IZQUIERDO EN LA CAJA')
})
*/
/*
box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA')
})
*/



input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA')
})


input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA')
})


input.addEventListener('keypress', () => {
    console.log('ESTÁS PULSANDO UNA TECLA')
})



