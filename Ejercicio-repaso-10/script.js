const colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

const color = prompt("Introduce un color")

if(colors.indexOf(color) !== -1){
    console.log(`Tu color se encuentra en el array`);
}
else{
    console.log(`Tu color no está definido `);
}

