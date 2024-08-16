//Activity 4: Using Third-Party Modules
//Task 6: Install a third-party module (e.g., lodash) using pm. Import and use a function from this module in a script.

const _ = require('lodash')

let users = [
    {
        user: "Taylor",
        email: "taylor@email.com"
    },
    {
        user: "Eminem",
        email: "eminem@email.com"
    },
    {
        user: "Bruno",
        email: "bruno@email.com"
    }
]

const firstIndex = () => {
    const ind = _.findIndex(users, (elem) => {
        return elem.user == 'Shivam';
    })
    return ind
}

console.log(`The first index is: ${firstIndex()}`)