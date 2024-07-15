//Day 2: Operators
//Activity 1: Arithmetic Operations
const number1 = 55;
const number2 = 10;

//Task 1: Write a program to add two numbers and log the result to the console.
add = number1 + number2
console.log("Add: " + add)

//Task 2: Write a program to subtract two numbers and log the result to the console.
subtract = number1 - number2
console.log("Subtract: " + subtract)

//Task 3: Write a program to multiply two numbers and log the result to the console.
multiply = number1 * number2
console.log("Multipy: " + multiply)

//Task 4 : Write a program to divide two numbers and log the result to the console.
divide = number1 / number2
console.log("Divide: " + divide)

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
mod = number1 % number2
console.log("Remainder: " + mod)

//Activity 2: Assignment Operators
//Task 6: Use the += operator to add a number to a variable and log the result to the console.
plusEqual = 7
plusEqual += number1
console.log("+= " + plusEqual);

//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
minusEqual = 80
minusEqual -= number1
console.log("-= " + minusEqual)

//Activity 3
//Task 8: Write a program to compare two numbers using › and < and log the result to the console.
if(number1 > number2){
    console.log("Number1 is greater number");
}
if(number1 < 100){
    console.log("100 is greater number");
}

//Task 9: Write a program to compare two numbers using ›= and ‹= and log the result to the console.
if (number1 >= number2){
    console.log("Number1 is greater than Number2")
}
if (number1 <= 55){
    console.log("Number 1 is less than or equal to 55")
}
else{
    console.log("Number 1 is not less than or equal to 55")
}

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
number3 = 5
number4 = "5"
if(number3 == number4){
    console.log("== operator")
}

if(number3 === number4){
    console.log("Number3 and Number4 are of same type")
}
else{
    console.log("Number3 and Number4 are of different type")
}

//Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (number1 > number2 && number4 <= number3){
    console.log("&& Operator successful.")
}

//Task 12 : Write a program that uses the Il operator to combine two conditions and log the result to the console.
if (number1 < number2 || number4 <= number3){
    console.log("|| Operator successful.")
}

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
if (number1 != number2){
    console.log("! Operator successful.")
}

//Activity 5: Ternary Operator
//Task 14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
console.log(number1 > 0 ? "number1 is positive": "number1 is negative number")