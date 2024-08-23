//Day 19: Regular Expressions

//Activity 1: Basic Regular Expressions
//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
console.log("------------------------Task 1------------------------")
let regex = /Javascript/g

const text = "Javascript is a scripting language. Javascript is used in Backend as well as Frontend. Javascript has so many powerful concepts known as async/await, IIFE, HOF"

console.log(text.match(regex))

//Task 2: Write a regular expression to match all digits in a string. Log the matches.
console.log("\n------------------------Task 2------------------------")
regex = /\d/g
string = "In the year 2023, a remarkable event occurred in the city of Springfield. The population, which was recorded as 153,294 in the previous census, had risen to 160,450"

console.log(string.match(regex))

//Activity 2: Character Classes and Quantifiers
//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
console.log("\n------------------------Task 3------------------------")
let regex01 = /[A-Z][A-Za-z]+/g
let text01 = "Learning Javascript is a very good thing. It will teach us that how to write code in backend as well as frontend. ECMAScript is best known as a Javascript standard."

console.log(text01.match(regex01))

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
console.log("\n------------------------Task 4------------------------")
regex02 = /\d+/g;
text02 = "In 2024, there will be 3 major events. The first event is on January 14, the second one is on March 25, and the last one is on November 30. Tickets for the events cost 50, 75, and 100 dollars respectively.";

console.log(text02.match(regex02));

//Activity 3: Grouping and Capturing
//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
console.log("\n------------------------Task 5------------------------")
const phoneFormat = "(123) 456-7890";
let regex03 = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

console.log(phoneFormat.match(regex03));

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
console.log("\n------------------------Task 6------------------------")
const email = "johndoe2000@gmail.com"
regex03 = /([^@]+)/g;

let matching = email.match(regex03);

if (matching) {
    let username = matching[0];
    let domain = matching[1];
    console.log(`Username : ${username}`);
    console.log(`Domain : ${domain}`);
} else {
    console.log("matching did't take place or invalid email address");
}

//Activity 4: Assertions and Boundaries
//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
console.log("\n------------------------Task 7------------------------")
const text04 = "Today got the task of Regular Expression"

let regex04 = /^\w+/g

console.log(text04.match(regex04)); // [ 'Today' ]

// Task 8 : Write a regular expression to match a word only if it is at the end of a string.
console.log("\n------------------------Task 8------------------------")
regex05 = /\w+$/g;
console.log(text04.match(regex05)); // [ 'Expression' ]

//Activity 5: Practical Applications
//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
console.log("\n------------------------Task 9------------------------")
const password = "9Okm@123#";

let regex06 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/g;

let isValid = password.match(regex06);

if (isValid) {
    console.log("Password is valid");
} else {
    console.log("Password is Invalid");
}

//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
console.log("\n------------------------Task 10------------------------")
const URL = "https://www.1facebook1.com";
regex = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/gi;

isValid = URL.match(regex);

if (isValid) {
    console.log(`URL is valid.`);
} else {
    console.log(`URL is invalid.`);
}