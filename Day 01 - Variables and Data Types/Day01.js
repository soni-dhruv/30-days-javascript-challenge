//Day 1: Variables and Data Types
//Activity 1: Variable Declaration

//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var date = 13
console.log("Today's date is: " + date)

//Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let dayOfWeek = "Saturday"
console.log("Today is a " + dayOfWeek)

//Activity 2: Constant Declaration
//Task 3: Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const is2023 = false
console.log("Is this year 2023? : " + is2023)

//Activity 3: Data Types
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
var date = 13
console.log(typeof(date))

var day = "Saturday"
console.log(typeof(day))

var is2024 = true
console.log(typeof(is2024))

var student = {
    name: "Rahul",
    class: 8,
}
console.log(typeof(student))

var colors = ["red", "green", "blue"]
console.log(typeof colors)

//Activity 4: Reassigning Variables
//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let balance = 5
console.log("Balance is: " + balance)

balance = 50
console.log("New balance is: " + balance)

//Activity 5: Understanding const
//Task 6: Try reassigning a variable declared with const and observe the error.
is2023 = true