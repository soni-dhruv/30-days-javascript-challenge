//Day 12: Error Handling

//Activity 1: Basic Error Handling with Try-Catch
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
console.log("------------------------Task 1------------------------")
function isNumberValid(value) {
    if (value > 17) {
        console.log(`${value} is a valid number`)
    } else {
        throw new Error(`ERROR! ${value} is invalid number`)
    }
}
try {
    isNumberValid(12)
} catch (error) {
    console.log(error)
}

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
console.log("------------------------Task 2------------------------")
function division(num, deno) {
    if (deno != 0) {
        console.log("Division is: ", num / deno)
    } else {
        throw new Error("Invalid division by 0")
    }
}
try {
    division(10, 2)
} catch (err) {
    console.error(err)
}

//Activity 2: Finally Block
//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
console.log("------------------------Task 3------------------------")
function taskFinally() {
    throw Error("Error occurred in Task")
}
try {
    taskFinally()
} catch (err) {
    console.log(err)
} finally {
    console.log("Task 3 completed")
}

//Activity 3: Custom Error Objects
//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
console.log("------------------------Task 4------------------------")
class customError extends Error {
    constructor(msg) {
        super(msg)
        this.msg = this.constructor.msg
    }
}

function customErr() {
    throw new customError("This is a custom error of task 4")
}
try {
    customErr()
} catch (err) {
    if (err instanceof customErr) {
        console.error("Error in Catch If block: ", err.message)
    } else {
        console.error("Error in Catch Else block")
    }
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
console.log("------------------------Task 5------------------------")
class emptyStringError extends Error {
    constructor(msg) {
        super(msg)
        this.msg = "Invalid input string"
    }
}
function isInputValid(str) {
    if (str.trim() === "") {
        throw new emptyStringError("Input is empty, enter a message")
    }
    return true
}
try {
    const input = " "
    isInputValid(input)
    console.error("Input validated")
} catch (err) {
    if (err instanceof emptyStringError) {
        console.log("Validation Error: ", err.msg)
    } else {
        console.error("Error occured in validating inout string")
    }
}

//Activity 4: Error Handling in Promises
//Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
console.log("------------------------Task 6------------------------")
const promiseSix = new Promise((resolve, reject) => {
    const str = "strin"
    if (str == 'string') {
        resolve("Valid String")
    } else {
        reject("Task 6: Promise rejected because of invalid string of Task 6")
    }
})
    .then((msg) => {
        console.log("Task 6 Resolve: ", msg)
    })
    .catch((err) => {
        console.error("Task 6 Reject: ", err)
    })

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const promiseSeven = new Promise((resolve, reject) => {
    const isIdMatch = true
    if (isIdMatch) {
        resolve("Task 7: User Verified from ID")
    } else {
        reject("Task 7: User's ID did not match")
    }
})

async function verifyIdPromiseSeven() {
    try {
        let response = await promiseSeven
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
verifyIdPromiseSeven()

//Activity 5: Graceful Error Handling in Fetch
//Task 8: Use the fetch API to request data from an invalid URL and handle the error using . catch . Log an appropriate error message to the console.
console.log("------------------------Task 8------------------------")
let url = 'https://examplefectch10Url.com'
fetch(url)
    .then((response) => {
        console.log("Task 8: fetch response: ", response)
    })
    .catch((error) => {
        console.error("Task 8: error occured in fetching from url", error)
    })

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
console.log("------------------------Task 9------------------------")
async function fetchUrl() {
    try {
        let response = await fetch('https://examplefectch10Url.com')
        console.log("Task 9: ", response)
    } catch (error) {
        console.Error("Task 9: Unable to fetch URL")
    }
}
fetchUrl()