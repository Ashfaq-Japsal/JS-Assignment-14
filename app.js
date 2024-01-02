//1
function now() {
    document.write(`<br><br>${new Date()}`)
}
now()
//2
function greeting (firstName, lastname){
    alert(`Welcome dear ${firstName +" " + lastname}`)
}
greeting(prompt(`Enter your first name`),prompt(`Enter your last name`))
//4
function calc (){
    let num1 = Number(prompt(`Enter 1st number`))
    let num2 = Number(prompt(`Enter 2nd number`))
    let operator = prompt(`Enter an operator (+, -, *, /)`)
    if (operator == `+`) {
            document.write(`<br><br>Calculation: ${num1 + num2}`)
    }
    else if (operator == `-`) {
        document.write(`<br><br>Calculation: ${num1 - num2}`)
}
    else if (operator == `*`) {
        document.write(`<br><br>Calculation: ${num1 * num2}`)
}
    else if (operator == `/`) {
        document.write(`<br><br>Calculation: ${num1 / num2}`)
}
}
calc()
//5
let num1 = Number(prompt(`Enter 1st number`))
let num2 = Number(prompt(`Enter 2nd number`))
function square (num1, num2){
    document.write(`<br><br>Square: ${num1 ** num2}`)
}
square(num1,num2)
//6
// Using recursive function
let number = Number(prompt(`Enter a number for getting its factorial number`))
function factorial(number) {
    if (number == 0) {
    return 1;
    } else {
      return number * factorial(number - 1);
    }
}
document.write(`<br><br>Factorial of ${number}: ${factorial(number)}`);
// Using for loop
// let fac = 1
// for (let i = number; i > 0; i--) {
//     fac = i * fac
// }
// console.log(fac)
//7
let startNum = parseInt(prompt(`Enter starting number`))
let endNum = parseInt(prompt(`Enter ending number`))
function counting(startNum, endNum) {
    document.write(`<br><br>Counting:<br>`)
    for (let i = startNum; i <= endNum; i++) {
        document.write(`${i}`)
        document.write(` `)
    }
}
counting(startNum,endNum)
//8

//9
let width = Number(prompt(`Enter the width of a rectangle`))
let height = Number(prompt(`Enter the height of a rectangle`))
function rectArea(width, height) {
    return width * height
}
let totalArea = rectArea(width,height)
document.write(`<br><br>Total area of your rectangle: ${totalArea}<br>`)
//10
function palindrome() {
    let text = prompt(`Enter a word to check its a palindrome or not`)
    let textToArr = text.split(``)
    let arrToText = textToArr.reverse()
    let reverseText = arrToText.join(``)
    if (reverseText == text) {
        return `Your word ${text} is palindrome`
    }
    else {
        return `Your word ${text} is not palindrome`
    }
}
document.write(palindrome())
//11
let text = prompt(`Enter a text to convert its words' 1st letter to upper case`)
function toUpper() {
    let textToArr = text.split(` `)
    let arrToUpper = []
    for (let i = 0; i < textToArr.length; i++) {
        arrToUpper.push(textToArr[i][0].toUpperCase() + textToArr[i].slice(1))
    }
    let arrToText = arrToUpper.join(` `)
    return arrToText
}
    document.write(`<br><br>Original text: ${text}<br>Converted text: ${toUpper()}`);
//12
let yourText = prompt(`Enter a text to get its longest word`)
function longestChar() {
    let toArr = yourText.split(` `)
    let lengthOfT = []
    for (let i = 0; i < toArr.length; i++) {
        lengthOfT.push(toArr[i].length)
    }
    lengthOfT.sort(compareFunction)
    function compareFunction(a, b) {
        return b-a
    }
    let longest
    for (let i = 0; i < toArr.length; i++) {
        if (lengthOfT[0] == toArr[i].length) {
            longest = toArr[i]
        }
    }
    return longest
}
    document.write(`<br><br>Your text: ${yourText}<br>Longest word of your text is: ${longestChar()}`);
//14
