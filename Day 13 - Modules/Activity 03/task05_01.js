//Activity 3: Importing Entire Modules
//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const number = 20
const string = "John Doe"

const greet = (str) => {
    console.log(`Hi ${str}, have a good day!`)
}

const applyMap = (arr) => {
    let nums = []
    arr.map(elem => {
        nums.push(elem * 3)
    })
    console.log(nums)
}

module.exports = {
    num: number,
    str: string,
    greet,
    operateArr: applyMap
}