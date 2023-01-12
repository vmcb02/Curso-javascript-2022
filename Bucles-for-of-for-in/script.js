let names = ['Paco', 'José', 'Paula', 'María']

for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(index);
}

/*
Palabras reservadas de bucles

break - Rompe el bucle
continue - Se salta la(s) posicion(es) que le indiquemos y después continúa su ejecución.
*/

for(let i = 0; i < names.length; i++){
    if(names[i]=== 'Paula'){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==='Paula'){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}



