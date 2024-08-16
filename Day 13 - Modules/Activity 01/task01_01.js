//Activity 1: Creating and Exporting Modules
//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const add = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`)
}

module.exports = { add }