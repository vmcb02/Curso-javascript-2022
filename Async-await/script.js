const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Victor')
        },2000)
    })
}

const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}

sayHello().then(res=>console.log(res))