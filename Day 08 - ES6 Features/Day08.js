//Day 8: ES6+ Features

//Activity 1: Template Literals
//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
console.log("------------------------Task 1------------------------")
let personName = 'David'
let personAge = 35
console.log(`Name of person is ${personName} and his age is ${personAge}`)

//Task 2: Create a multi-line string using template literals and log it to the console.
console.log("------------------------Task 2------------------------")
console.log(`Name of person is ${personName}\nand his age is ${personAge}`)

//Activity 2: Destructuring
//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log("------------------------Task 3------------------------")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let [number1, number2] = numbers
console.log(number1, number2)

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
console.log("------------------------Task 4------------------------")
let book = {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    year: "2018",
    country: "United States"
}
let {title: bookName, author: author } = book
console.log(`Book Name: ${bookName}`)
console.log(`Book Author: ${author}`)

//Activity 3: Spread and Rest Operators
//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log("------------------------Task 5------------------------")
let numbers2 = [...numbers, 10, 11, 12, 13]
console.log(`Spread Operator new array: ${numbers2}`)

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log("------------------------Task 6------------------------")
function sum(...args) {
    let sum = 0
    for (let arg of args) {
        sum += arg
    }
    return sum
}
console.log(sum(5, 10, 20))

//Activity 4: Default Parameters
//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.log("------------------------Task 7------------------------")
function numProduct(a, b = 5) {
    return a * b
}
console.log(`Calling function with 2nd parameter: ${numProduct(8, 2)}`)
console.log(`Calling function without 2nd parameter: ${numProduct(8)}`)

//Activity 5: Enhanced Object Literals
//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log("------------------------Task 8------------------------")
let accountNumber = 156030145
let customerName = `David`
let balance = 15000

function accountDetails() {
    return `Account number: ${this.accountNumber}, Customer name: ${this.customerName}, Balance: ${this.balance}`
}

let bank = {
    accountNumber,
    customerName,
    balance,
    accountDetails
}

console.log(bank, '\n', bank.accountDetails())

//Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log("------------------------Task 9------------------------")
let id = 123;
let employee = 'John Doe';
let department = 'HR';
let experience = 3;
let employeeDetails = {
    ['ID']: id,
    ['Name']: employee,
    ['Department']: department,
    ['Years of experience']: experience
}
console.log(employeeDetails);