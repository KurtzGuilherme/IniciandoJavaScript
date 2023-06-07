//1-------------------------
let msg = 'Hello World!'
console.log(msg)

//2-------------------------
let number1 = 5
let number2 = 12

const sum = function (val1, val2) {
  return val1 + val2
}

console.log(sum(number1, number2))

//3-------------------------
let vNumber1 = 1
let vNumber2 = 'test'

console.log(isNumber(vNumber1))
console.log(isNumber(vNumber2))

function isNumber(valeu) {
  if (typeof (valeu) === 'number')
    return 'É um número'

  return 'Não é um número'
}


//4-------------------------
let vString1 = 'test'
let vString2 = 2

console.log(isString(vString1))
console.log(isString(vString2))

function isString(valeu) {
  if (typeof (valeu) === 'string')
    return 'É uma string'

  return 'Não é uma string'
}

//5-------------------------
let vBool1 = true
let vBool2 = 2

console.log(isBool(vBool1))
console.log(isBool(vBool2))

function isBool(valeu) {
  if (typeof (valeu) === 'boolean')
    return 'É um booleano'

  return 'Não é um booleano'
}

//6-------------------------
let number3 = 40
let number4 = 35

const subtraction = function (val1, val2) {
  return val1 - val2
}

console.log(subtraction(number3, number4))

//7-------------------------
let number5 = 7
let number6 = 8

const multiplication = function (val1, val2) {
  return val1 * val2
}

console.log(multiplication(number5, number6))

//8-------------------------
let number7 = 14
let number8 = 2

const division = function (val1, val2) {
  return val1 / val2
}

console.log(division(number7, number8))

//9-------------------------
let vPar1 = 10
let vImpar1 = 11

const IsEvenNumber = function (val) {
  if (val % 2 === 0)
    return 'É um número pa'

    return 'Não é um número par'
}

console.log(IsEvenNumber(vPar1))
console.log(IsEvenNumber(vImpar1))

//10-------------------------
let vImpar2 = 5
let vPar2 = 2

const oddNumber = function (val) {
  if (val % 2 !== 0)
    return 'É um número ímpar'

    return 'Não é um número ímpar'
}

console.log(isOddNumber(vImpar2))
console.log(isOddNumber(vPar2))