//Day 16: Recursion

//Activity 1: Basic Recursion
//Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
console.log("------------------------Task 1------------------------")
const factorial = (num) => {
    if (num < 0) return `Not definded`

    if (num === 0 || num === 1) return 1

    return num * factorial(num - 1)
}

const number1 = 0
console.log(`The factorial of ${number1} is ${factorial(number1)}`)

const number2 = -5
console.log(`The factorial of ${number2} is ${factorial(number2)}`)

const number3 = 3
console.log(`The factorial of ${number3} is ${factorial(number3)}`)

//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
console.log("\n------------------------Task 2------------------------")

const fibonacci = (nTerm) => {
    if (nTerm <= 1) return nTerm

    return fibonacci(nTerm - 1) + fibonacci(nTerm - 2)
}

console.log(`0ᵗʰ term of fibonacci series is ${fibonacci(0)}`)
console.log(`1ˢᵗ term of fibonacci series is ${fibonacci(1)}`)
console.log(`2ⁿᵈ term of fibonacci series is ${fibonacci(2)}`)
console.log(`3ʳᵈ term of fibonacci series is ${fibonacci(3)}`)
console.log(`4ᵗʰ term of fibonacci series is ${fibonacci(4)}`)
console.log(`5ᵗʰ term of fibonacci series is ${fibonacci(5)}`)
console.log(`6ᵗʰ term of fibonacci series is ${fibonacci(6)}`)

//Activity 2: Recursion with Arrays
//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
console.log("\n------------------------Task 3------------------------")
const sumElemArray = (array0, index) => {
    if (index === 0) return array0[index];

    return array0[index] + sumElemArray(array0, index - 1);
}

const arr1 = [1, 2, 3, 4, 5, 6]
console.log(`Sum of array elements is: ${sumElemArray(arr1, arr1.length - 1)}`)

const arr2 = [10, 20, 30]
console.log(`Sum of array elements is: ${sumElemArray(arr2, arr2.length - 1)}`)

const arr3 = [25, 50, 100, 150]
console.log(`Sum of array elements is: ${sumElemArray(arr3, arr3.length - 1)}`)

//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
console.log("\n------------------------Task 4------------------------")
const maxElem = (arr, index) => {
    if (index == 0) return arr[0]

    return Math.max(arr[index], maxElem(arr, index - 1))

}

const array1 = [5, 2, 10, 7]
console.log(`Maximum element among ${array1.join(', ')} is: ${maxElem(array1, array1.length - 1)}`)

const array2 = [54, 22, 104, 72]
console.log(`Maximum element among ${array2.join(', ')} is: ${maxElem(array2, array2.length - 1)}`)

//Activity 3: String Manipulation with Recursion
//Task 5: Write a recurive function to reverse a string. Log the index of the target element for a few test cases.
console.log("\n------------------------Task 5------------------------")
const stringReversal = (str, charIndex) => {
    if (charIndex == 0) return str.charAt(charIndex)

    return str.charAt(charIndex) + stringReversal(str, charIndex - 1)
}

const str = "devil"
console.log(`Reversal of "${str}" is => "${stringReversal(str, str.length - 1)}"`)

const str2 = "madam"
console.log(`Reversal of "${str2}" is => "${stringReversal(str2, str2.length - 1)}"`)

const str3 = "soham"
console.log(`Reversal of "${str3}" is => "${stringReversal(str3, str3.length - 1)}"`)

//Task 6: Wtite a recurive function to check if a string is a palindrome. Log the index of the target element for a few test cases.
console.log("\n------------------------Task 6------------------------")
const isPalindrome = (str) => {
    if (str === stringReversal(str, str.length - 1)) {
        return `is a Palindrome string`
    } else {
        return `is not a Palindrome string`
    }
}

const string1 = "level";
console.log(`"${string1}" ${isPalindrome(string1)}`);

const string2 = "javascript";
console.log(`"${string2}" ${isPalindrome(string2)}`);

const string3 = "trail";
console.log(`"${string3}" ${isPalindrome(string3)}`);

const string4 = "abbcbba";
console.log(`"${string4}" ${isPalindrome(string4)}`);

//Activity 4: Recursive Search
//Task 7: Write a recursive function to perform binary search on a sorted array. Log the index of the target element for a few test cases.
console.log("\n------------------------Task 7------------------------")
const binarySearch = (arr, elem, low = 0, high = arr.length - 1) => {
    const mid = Math.floor(low + (high - low) / 2)

    if (low > high) return -1

    if (arr[mid] === elem) return mid

    else if (arr[mid] < elem) {
        return binarySearch(arr, elem, mid + 1, high)
    }

    else return binarySearch(arr, elem, low, mid - 1)
}

const arr = [15, 24, 31, 48, 73, 97]

const elem1 = 48
console.log(`Element ${elem1} foun at index ${binarySearch(arr, elem1)}`)

const elem2 = 15
console.log(`Element ${elem2} foun at index ${binarySearch(arr, elem2)}`)

const elem3 = 48
console.log(`Element ${elem3} foun at index ${binarySearch(arr, elem3)}`)

//Task 8: Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases 
console.log("\n------------------------Task 8------------------------")
const countOccurence = (arr, target) => {
    if (arr.length === 0) return 0

    let count = 0
    if (arr[0] === target) count++
    else count = 0

    return count + countOccurence(arr.slice(1), target)
}

const array = [32, 12, 34, 12, 54, 32, 12, 10];

const target1 = 12;
console.log(`The occurrence of ${target1} in ${array.join(", ")} is ${countOccurence(array, target1)}`);


const target2 = 32;
console.log(`The occurrence of ${target2} in ${array.join(", ")} is ${countOccurence(array, target2)}`);

//Activity 5: Tree Traversal (Optional)
//Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function inOrderTraversal(root) {
    let result = []
    function traverse(node) {
        if (node != null) {
            traverse(node.left)

            result.push(node.value)

            traverse(node.right)
        }
    }
    traverse(root)
    return result.join(' -> ')
}

const root = new TreeNode(10);

root.left = new TreeNode(2);

root.right = new TreeNode(12);

root.left.left = new TreeNode(23);

root.left.right = new TreeNode(50);

console.log("In-Order Traversal : " + inOrderTraversal(root));

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
console.log("\n------------------------Task 9------------------------")

function calcDepthBT(node) {
    if (node === null) return 0

    let leftDepth = calcDepthBT(node.left)
    let rightDepth = calcDepthBT(node.right)

    return Math.max(leftDepth, rightDepth) + 1
}

const root2 = new TreeNode(20);
root2.left = new TreeNode(90);
root2.right = new TreeNode(13);
root2.left.left = new TreeNode(48);
root2.left.right = new TreeNode(52);

console.log(`The Depth of Binary Tree is ${calcDepthBT(root2)}`); //3

console.log();

const root3 = new TreeNode(8);
root3.left = new TreeNode(31);
root3.right = new TreeNode(45);
root3.left.left = new TreeNode(83);
root3.left.right = new TreeNode(1);
root3.left.left.left = new TreeNode(39);

console.log(`The Depth of Binary Tree is ${calcDepthBT(root3)}`); //4