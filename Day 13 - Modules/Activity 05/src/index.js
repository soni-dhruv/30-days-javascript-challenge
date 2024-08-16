//Activity 5: Module Bundling (Optional)
//Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

console.log("Importing the files from the module1.js and module2.js by using webpack")

import { greet } from './module1.js'
import { farewell } from './module2.js'

console.log(greet('Alice'))
console.log(farewell('Bob'))