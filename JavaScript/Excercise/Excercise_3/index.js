// Create factorial of n  using js 
let arr = [];
let arrLengthStr = prompt("Enter number to calculate the Factorial")
let arrLength = parseInt(arrLengthStr)
for (let i = 1; i <= arrLength; i++) {
    arr.push(i)
}
let factorial = (a, b) => {
    return a * b;
}
let finalFactorial = arr.reduce(factorial)
console.log(finalFactorial);
