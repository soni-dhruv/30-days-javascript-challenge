//Day 4: Loops

//Activity 1: For Loop
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log("------------TASK 1-----------")
for(let i = 1; i <= 10; i++){
    console.log(i)
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("------------TASK 2-----------")
for(let i = 1; i <= 12; i++){
    multiply = 5 * i
    console.log("5 x " + i + " = " + multiply)
}

//Activity 2: While Loop
//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("------------TASK 3-----------")
let sumOfNumbers = 0;
let number = 1;
while (number <= 10){
    sumOfNumbers += number;
    number++;
}
console.log("The sum of numbers from 1 to 10 is: " + sumOfNumbers);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("------------TASK 4-----------")
let num = 10
while(num >= 1){
    console.log(num)
    num--
}


//Activity 3: Do... While Loop
//Task 5: Write a program to print numbers from 1 to 5 using do...while loop.
console.log("------------TASK 5-----------")
let nums = 1
do{
    console.log(nums)
    nums++
}
while(nums <= 5)

//Task 6: Write a program to calculate factorial of a number using a do...while.
console.log("------------TASK 6-----------")
factorial = 1
let factorialNumber = 6
do{
    factorial *= factorialNumber
    factorialNumber--
}
while(factorialNumber > 0)

console.log("Factorial: " + factorial)

//Activity 4: Nested Loops
console.log("------------TASK 7-----------")
/*
Task 7: Write a program to print a pattern using nested for loops:
*
* *
* * *
* * * *
* * * * *
*/
for (let i = 1; i <= 5; i++){
    let rowPattern = ''
    for (let j = 1; j <= i; j++){
        rowPattern += '* '
    }
    console.log(rowPattern)
}

//Activity 5: Loop Control Statements
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("------------TASK 8-----------")
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//Task 9: Mrite a Proeram to print numbers from 1 to:10, but stop the loop when the number is 7 using the break statement.
console.log("------------TASK 9-----------")
for(let i = 1; i <= 10; i++){
    if(i == 7){
        break
    }
    console.log(i)
}