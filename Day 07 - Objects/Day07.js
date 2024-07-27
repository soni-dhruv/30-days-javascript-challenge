// Day 07: Objects

//Activity 1: Object Creation and Access
//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log("------------------------Task 1------------------------")
let book = {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    year: "2018",
    details: function(){
        return `Book title is ${book.title} and book author is ${book.author}`
    },
    updateYear: function(newYear){
        this.year = newYear
        return this
    },
}
console.log(book)

//Task 2: Access and log the title and author properties of the book object.
console.log("------------------------Task 2------------------------")
console.log(`Book title is ${book.title} and book author is ${book.author}`)

//Activity 2: Object Methods
//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log("------------------------Task 3------------------------")
console.log(book.details())

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("------------------------Task 4------------------------")
console.log(book.updateYear(2019))

//Activity 3: Nested Objects
//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log("------------------------Task 5------------------------")
let library = {
    name: "MLK",
    books:[
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            year: "1937"
        },
        {
            title: "The Power of Habit",
            author: "Charles Duhigg",
            year: "2012"
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            year: "1997"
        }
    ]
}
console.log(library)

//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("------------------------Task 6------------------------")
console.log(`Library is named in respect to Martin Luther King Jr. and name of Library is ${library.name}`)

//Activity 4: The this Keyword
//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log("------------------------Task 7------------------------")
book.details = function(){
    return `The book is ${this.title} and it was published in ${this.year}`
}
console.log(book.details())

//Activity 5: Object Iteration
//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("------------------------Task 8------------------------")
for(let property in book){
    console.log(`${property}: ${book[property]}`)
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("------------------------Task 9------------------------")
let keyValue = Object.keys(book)
console.log(`Object.keys: ${keyValue}`)

let bookValue = Object.values(book)
console.log(`Object.value: ${bookValue}`)