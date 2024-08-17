//Day 15: Closures

//Activity 1: Understanding Closures
//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
    let x = 34
    return function inner() {
        console.log(`Inner value is ${x}`)
    }
}
outer()();

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
    let counter = 0

    function incrementCounter() {
        counter++
    }

    function getCounter() {
        console.log(`The current value of counter is: ${counter}`)
    }

    return { incrementCounter, getCounter }
}

const count = counter()

count.incrementCounter()
count.getCounter()

count.incrementCounter()
count.getCounter()

count.incrementCounter()
count.getCounter()

//Activity 2: Practical Closures
//Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generatedID() {
    let id = Math.floor(Math.random() * 1000)

    function lastGeneratedID() {
        id++;
    }

    function getLastGeneratedID() {
        console.log(`The last generated id is: ${id}`)
    }

    return { lastGeneratedID, getLastGeneratedID }
}

const trackID = generatedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

trackID.lastGeneratedID();
trackID.getLastGeneratedID();

console.log();

//Task 4: Create closure that captures a user's name and returns a function that greets the user by name.
function user() {
    const username = "John Doe"

    return function greet() {
        console.log(`Hey ${username}, Nice to see you!`)
    }
}
user()()

//Activity 3: Closures in Loops
//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const arr = []

for (let i = 0; i <= 10; i++) {
    arr.push(function () {
        return function () {
            console.log(`Function ${i + 1} index is ${i}`)
        }
    })
}
arr.map(func => func()())

//Activity 4: Module Pattern
//Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function itemManager() {
    const itemsArr = []

    function addItem(item) {
        itemsArr.push(item)
        console.log(`Item ${item} has been added`)
    }

    function removeItem(item) {
        const index = itemsArr.indexOf(item)
        if (index > -1) {
            itemsArr.splice(index, 1)
            console.log(`${item} has been removed`)
        } else {
            console.log(`${item} not found in collection`)
        }
    }

    function getItem() {
        if (itemsArr.length == 0) {
            console.log("The collection is empty")
        } else {
            console.log(`Items present in the collection are ad follows: `)
            itemsArr.map((item, index) => {
                console.log(`Item ${index + 1} => ${item}`)
            })
        }
    }
    return { addItem, removeItem, getItem }
}
const itemModule = itemManager()

itemModule.addItem(23)
itemModule.addItem(60)
itemModule.addItem(1)
itemModule.addItem(43)

console.log()

itemModule.removeItem(1)
itemModule.removeItem(10)

console.log()
itemModule.getItem()

//Activity 5: Memoization
//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations
function calcSquareRoot() {
    const cache = {}

    return function getSquareRoot(num) {
        if (cache[num]) return cache[num]
        setTimeout(() => {
            const result = Math.sqrt(num).toFixed(3)
            cache[num] = result
            console.log(`The square root of ${num} is ${result}`)
        }, 4000)
    }
}

const sqRoot = calcSquareRoot()
sqRoot(3)
sqRoot(3)

//Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial() {
    const memo = {}

    function factNumber(num) {
        if (num in memo) return memo[num]

        if (num < 0) return `not defined`

        if (num == 0 || num == 1) return 1

        memo[num] = num * factNumber(num - 1)

        return memo[num]
    }
    return factNumber
}

const fac = factorial()
const number = 6
console.log()
console.log(`The factorial of ${number} is ${fac(number)}`)