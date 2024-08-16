//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: "John Derek",
    age: 35,
    email: "johnderek@email.com",
    hobby: function () {
        return `${this.name} is a song writer`
    }
}

module.exports = { person }