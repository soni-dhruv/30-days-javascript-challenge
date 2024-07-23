//Day 06: Arrays

//Activity 1: Array Creation and Access
//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log("------------------------Task 1------------------------")
let rollno = [1, 2, 3, 4, 5]
console.log(rollno)

//Task 2: Access the first and last elements of the array and log them to the console.
console.log("------------------------Task 2------------------------")
console.log(`Fist element of array is ${rollno[0]} and last element of array is ${rollno[rollno.length - 1]}`)

//Activity 2: Array Methods (Basic)
//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log("------------------------Task 3------------------------")
rollno.push(6)
console.log(`New array after push method: ${rollno}`)

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log("------------------------Task 4------------------------")
rollno.pop()
console.log(`Array after the pop method: ${rollno}`)

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log("------------------------Task 5------------------------")
rollno.shift()
console.log(`Array after the shift method: ${rollno}`);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log("------------------------Task 6------------------------")
rollno.unshift(...[1])
console.log(`Array after the unshift method: ${rollno}`);

//Activity 3: Array Methods (Intermediate)
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log("------------------------Task 7------------------------")
let marks = rollno.map(num => num * 2)
console.log(marks)

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log("------------------------Task 8------------------------")
let evenArray = rollno.filter(num => num % 2 === 0);
console.log(evenArray);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log("------------------------Task 9------------------------")
let sum = rollno.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum);

//Activity 4: Array Iteration
//Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("------------------------Task 10------------------------")
for(let i = 0; i <= 4; i++){
    console.log(rollno[i])
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("------------------------Task 11------------------------")
rollno.forEach(element => (console.log(element)))

//Activity 5: Multi-dimensional Arrays
//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log("------------------------Task 12------------------------")
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
matrix.forEach(row => console.log(row))

//Task 13: Access and log a specific element from the two-dimensional array.
console.log("------------------------Task 13------------------------")
console.log(`${matrix[0][0]}`)
console.log(`${matrix[1][1]}`)
console.log(`${matrix[2][2]}`)