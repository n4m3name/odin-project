// Add 7 to num
function add7(num) {
    return(num + 7)
}
let num = prompt("Enter a number: ")
console.log(add7(Number(num)))

// Multiply
function multiply(num1, num2) {
    return(num1 * num2)
}
let num1 = prompt("Enter first number: ")
let num2 = prompt("Enter 2nd number: ")
console.log(multiply(Number(num1), Number(num2)))

// Capitalize
function capitalize(str) {
    let strUp = str.charAt(0).toUpperCase() + str.slice(1)
    return strUp
}
let str = prompt("Enter a string: ")
console.log(capitalize(str))

// Last letter
function lastLetter(str) {
    return str.charAt(str.length-1)
}
str = prompt("Enter a string: ")
console.log(lastLetter(str))