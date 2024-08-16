//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

const factorial = (num) => {
    let fac = 1, i = 1
    while (i <= num) {
        fac *= i
        i++
    }
    console.log(`The factorial of ${num} is ${fac}`)
}

export default factorial