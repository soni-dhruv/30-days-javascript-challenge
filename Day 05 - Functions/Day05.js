//Day 5: Functions

//Activity 1: Function Declaration
//Task 1: Wite a function to check if a number is even or odd and log the result to the console.
console.log("------------------------Task 1------------------------")
function EvenOrOdd(num){
    if(num % 2 === 0){
        console.log(`${num} is even number.`);
    }
    else{
        console.log(`${num} is odd number.`);
    }
}

EvenOrOdd(9);

//Task 2: Wite a function to calculate the square of a number and return the result.
console.log("------------------------Task 2------------------------")
function SquareOfNumber(num){
    return Math.pow(num, 2);
}
const numForSquare = SquareOfNumber(12);
console.log(`Square is: ${numForSquare}`);

//Activity 2: Function Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("------------------------Task 3------------------------")
function MaxOfNumbers(num1, num2){
    console.log(`${Math.max(num1, num2)} is maximum number`);
};
MaxOfNumbers(18, 27)

//Task 4: Write a function expression to concatenate two strings and return the result.
console.log("------------------------Task 4------------------------")
function concatString(firstName, lastName){
    return firstName + " " + lastName
};
const fullName = concatString("Jon", "Dere");
console.log("Full name after concat is " + fullName);

//Activity 3: Arrow Functions
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log("------------------------Task 5------------------------")

const sumOfNumbers = (num1, num2) => {
    return num1 + num2
}
let res = sumOfNumbers(12, 15)
console.log(`Sum of two numbers using arrow function: ${res}`)

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log("------------------------Task 6------------------------")
const checkChar = (word) => {
    if(word.includes("s") || word.includes("S")){
        return true;
    } 
    else{
        return false;
    }
};
const word = checkChar("Sunburn");
console.log(word)

//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log("------------------------Task 7------------------------")
function product(num1, num2 = 5){
    return num1 * num2;
}
const resultOfProduct = product(8);
console.log(resultOfProduct)

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log("------------------------Task 8------------------------")
function greeting(name, age = 38){
    return `And the winner is ${name} of age ${age}`;
}
const greetingUser = greeting("John");
console.log(greetingUser)


//Activity 5: Higher-Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log("------------------------Task 9------------------------")
const function1 = (num) => {
    console.log(`Hello ${num}`);
};

function highFunction(func, num) {
    for (let i = 1; i <= num; i++) {
        func(num);
    }
}
highFunction(function1, 5);

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const valueFunction = (value) => {
    const val = value;
    return val;
};

const resultFunction = (val) => {
    console.log(`The result is ${val}.`);
};

const highFunc2 = (valueFunction, resultFunction, value) => {
    const valueAssign = valueFunction(value);
    resultFunction(valueAssign);
};

highFunc2(valueFunction, resultFunction, 4)