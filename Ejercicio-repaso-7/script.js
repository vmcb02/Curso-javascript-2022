const numbers = [1,2,3,4,5]
let pars = []
let impars = []

for(const number of numbers){
    let random = Math.round(Math.random() * (10 - 1) + 1)
    const result = number * random

    console.log(`${number} x ${random} = ${result}`);
    if(result % 2 == 0){
        pars.push(result)
    }
    else{
        impars.push(result)
    }
}
console.log(pars);
console.log(impars);