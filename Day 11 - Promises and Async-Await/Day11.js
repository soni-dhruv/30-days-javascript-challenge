//Day 11: Promises and Async/Await

//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("------------------------Task 1------------------------")
        console.log("Task 1 logged after delay of 2 sec")
    }, 2000)
})

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using - catch) .
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("------------------------Task 2------------------------")
        console.log("This is Task 2 to reject a promise after 2 sec")
        reject("Error occured in Task 2")
    }, 2000)
})
promiseTwo
    .then((msg) => {
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })

//Activity 2: Chaining Promises
//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
console.log("------------------------Task 3------------------------")
const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            res({ studentName: "David", rollNo: 64, grade: "A+" })
        } else {
            rej("! Error Occured in Task 3!")
        }
    }, 2000)
})

promiseThree
    .then((studentData) => {
        console.log(studentData)
        return studentData
    })
    .then((stData) => {
        console.log(`Student Name: ${stData.studentName}`)
        return stData.grade
    })
    .then((studentGrade) => {
        console.log(`Student Grade: ${studentGrade}`)
    })
    .catch((err) => {
        console.log("! Error Occured in Task 3")
    })

//Activity 3: Using Async/Await
//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false
        if (!err) {
            resolve({ userName: "Dan", userAge: 58 })
        } else {
            console.log("------------------------Task 4------------------------")
            reject("! Error Occured in Task 4!")
        }
    }, 4000)
})

async function consumePromiseFour() {
    let response = await promiseFour
    console.log("------------------------Task 4------------------------")
    console.log("Response of promise four consumed by the async function: ", response)
}
consumePromiseFour()

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
console.log("------------------------Task 5------------------------")
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({ userName: "Tom", userAge: 35 })
        } else {
            console.log("------------------------Task 5------------------------")

            reject("! Error occured in Task 5 in Promise Five")
        }
    }, 3000)
})

async function consumePromiseFive() {
    try {
        let response = await promiseFive
        console.log("Response of promise Five consumed by the async function: ", response)
    } catch (err) {
        console.error(err)
    }
}
consumePromiseFive()

//Activity 4: Fetching Data from an API
//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiUrl = 'https://jsonplaceholder.typicode.com/users'
fetch(apiUrl)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("------------------------Task 6------------------------")

        console.log("Task 6: ", data)
    })
    .catch((err) => {
        console.log("------------------------Task 6------------------------")

        console.log("Error in fetching the API: ", err)
    })

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchUsingAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log("------------------------Task 7------------------------")
        console.log("Task 7: ", data)
    } catch (err) {
        console.error("! Error Occured in Task 7 !")
    }
}
fetchUsingAsync()

//Activity 5: Concurrent Promises
//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseEight = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Eight completed")
    }, 2000)
})
const promiseEight_One = 75

const promiseEight_Two = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from Promise Eight_Two")
    }, 2000)
})

Promise.all([promiseEight, promiseEight_One, promiseEight_Two])
    .then((data) => {
        console.log("------------------------Task 8------------------------")
        console.log("Task 8: ", data)
    })
    .catch((err) => {
        console.log(err)
    })

//Task 9: Use Promise, race to log the value of the first promise that resolves among multiple promises.
const promiseNine = new Promise((response, reject) => {
    setTimeout(response, 400, 'Promise Nine')
})

const promiseNine_One = new Promise((response, reject) => {
    setTimeout(response, 300, 'Promise Nine One')
})

Promise.race([promiseNine, promiseNine_One])
    .then((val) => {
        console.log("------------------------Task 9------------------------")
        console.log("Task Nine: ", val)
    })