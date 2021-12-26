const narcissistic = (value) => value.toString().split('').map((x) => parseInt(x)) // divide o inteiro em um array de inteiros
    .map((cur) => cur ** value.toString().length) // eleva cada número ao length
    .reduce((acc, cur) => acc + cur) // soma os números exponenciados 
    == value ? true : false // Verifica se o número final é igual ao inicial

const genList = (nI, nF) => {
    let arr = [];
    for (var i = nI; i <= nF; i++) if (narcissistic(i)) arr.push(i)
    return arr
}

console.log(narcissistic(153))

console.log(genList(0, 500))