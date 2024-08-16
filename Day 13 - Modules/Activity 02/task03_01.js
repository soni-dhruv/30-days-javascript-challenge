//Activity 2: Named and Default Exports
//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const sub = (a, b) => {
    console.log(`${a} - ${b} = ${a - b}`)
}

const mul = (a, b) => {
    console.log(`${a} * ${b} = ${a * b}`)
}

const div = (a, b) => {
    console.log(`${a} / ${b} = ${a / b}`)
}

const sq = (a, b) => {
    console.log(`${a}\u00B2 = ${a * a}`)
}

module.exports = { sub, mul, div, sq }