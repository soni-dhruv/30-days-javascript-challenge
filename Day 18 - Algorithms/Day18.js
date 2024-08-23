//Day 18: Algorithms
//Activity 1: Sorting Algorithms

//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
console.log("------------------------Task 1------------------------")
const bubbleSort = (arr) => {
    let n = arr.length
    let swap
    for (let i = 0; i < n - 1; i++) {
        swap = false

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        if (!swap) break
    }
    return arr
}

const arr1 = [45, 23, 1, 76, 54, 30];
console.log(`Before Sorting : [${arr1.join(', ')}]`);

const bubbleSortArray = bubbleSort(arr1);

console.log(`After Sorting : [${bubbleSortArray.join(', ')}]`);

//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
console.log("\n------------------------Task 2------------------------")
const selectionSort = (arr) => {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minPos = i
        for (let j = i + 1; j < n; j++) {
            if (arr[minPos] > arr[j]) {
                minPos = j
            }
        }
        //Swap
        [arr[minPos], arr[i]] = [arr[i], arr[minPos]]
    }
    return arr
}

const arr2 = [34, 12, 10, 45, 62, 51];
console.log(`Before Sorting: [${arr2.join(', ')}]`);

const selectionSortArray = selectionSort(arr2);
console.log(`After Sorting: [${selectionSortArray.join(', ')}]`);

//Task 3: Implement the quicksort sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
console.log("\n------------------------Task 3------------------------")
const quickSort = (arr, low, high) => {
    if (low < high) {
        let pivotIdx = partition(arr, low, high)

        quickSort(arr, low, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, high)
    }
}

const partition = (arr, low, high) => {
    let pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    i++
    [arr[i], arr[high]] = [arr[high], arr[i]]; // Swap pivot to correct position

    return i
}

const arr3 = [12, 19, 5, 1, 7, 2];
let n = arr3.length;
console.log(`Before Sorting : [${arr3.join(', ')}]`);

quickSort(arr3, 0, n - 1);

console.log(`After Sorting : [${arr3.join(', ')}]`);

//Activity 2: Searching Algorithms
//Task 4: Implement the linear search algorithm to find a target value in a sorted array: Log the index of the target value.
console.log("\n------------------------Task 4------------------------")
const linearSearch = (arr, target) => {
    for (let i in arr) {
        if (arr[i] === target) return i
    }
    return -1
}

let arr = [23, 14, 43, 50, 99]
let target = 43
console.log(`Element ${target} found at index ${linearSearch(arr, target)}`)

arr = [54, 39, 74, 1, 29];
target = 29;
console.log(`Element ${target} found at index ${linearSearch(arr, target)}`);

arr = [54, 39, 74, 1, 29];
target = 100;
console.log(`Element ${target} found at index ${linearSearch(arr, target)}`);

//Task 5: Implement the binary search algorithm to find a target value in a sorted array: Log the index of the target value.
console.log("\n------------------------Task 5------------------------")
const binarySearch = (arr, target) => {
    let low = 0, high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

arr = [2, 3, 10, 32, 100];
target = 2;
console.log(`Element ${target} found at index ${binarySearch(arr, target)}`);

target = 32;
console.log(`Element ${target} found at index ${binarySearch(arr, target)}`);

//Activity 3: String Algorithms
//Task 6: Write a function to count the occurrences of each character in a string. Log the index of the target value
console.log("\n------------------------Task 6------------------------")
const characterCount = (str) => {
    let charCount = {}
    for (let ch of str) {
        if (!charCount[ch]) {
            charCount[ch] = 1
        } else {
            charCount[ch]++
        }
    }
    return charCount
}

let string = "Sandeep";
console.log(`The character count of each character of string "${string}" as follows : `);
console.log(characterCount(string));


string = "Chai Aur Code";
console.log(`The character count of each character of string "${string}" as follows : `);
console.log(characterCount(string));

//Task 7: Write a function to find the longest substring without repeating characters in s string. Log the length of substring.
const longestSubstring = (str) => {
    if (str.length < 2) return str.length
    let start = 0, maxLength = 0, maxSubstring = ""
    const map = {}

    for (let end = 0; end < str.length; end++) {
        const exist = map[str[end]]
        if (exist >= start) {
            start = exist + 1
        }
        map[str[end]] = end
        const currentLength = end - start + 1
        if (currentLength > maxLength) {
            maxLength = currentLength
            maxSubstring = str.substring(start, end + 1)
        }
        return maxSubstring
    }
}
string = "pwwkew";
console.log(`The Longest substring without repeating characters : ${longestSubstring(string)}`);
console.log(`The length is : ${longestSubstring(string).length}`);

console.log();

string = "sandeep";
console.log(`The Longest substring without repeating characters : ${longestSubstring(string)}`);
console.log(`The length is : ${longestSubstring(string).length}`);

//Activity 4: Array Algorithms
//Task 8: Write a function to rotate an array by k positions. Log the rotated array.
console.log("\n------------------------Task 8------------------------")
const rotateArray = (arr, k) => {
    let nums = []
    for (let i = 0; i < arr.length; i++) {
        nums[(i + k) % arr.length] = arr[i]
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = nums[i]
    }
    return arr
}
let arr01 = [23, 14, 10, 43, 54, 39, 98];
let k = 3;
console.log(`Before rotation : [${arr01.join(', ')}]`);
console.log(`After rotation : [${rotateArray(arr01, k).join(', ')}]`);

console.log();

arr = [1, 2, 3, 4, 5, 6, 7];
k = 2;
console.log(`Before rotation : [${arr01.join(', ')}]`);
console.log(`After rotation : [${rotateArray(arr01, k).join(', ')}]`);

//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
console.log("\n------------------------Task 9------------------------")
const mergedSort = (arr1, arr2) => {
    let mergedArray = []
    let i = 0, j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j])
        j++
    }

    return mergedArray
}

const arr001 = [30, 45, 67, 78];
const arr002 = [12, 40, 52, 73, 95];

console.log(`Sorted merging of [${arr001.join(', ')}] and [${arr002.join(', ')}] : `);
console.log(mergedSort(arr001, arr002));

// Task 10 : Write a function to solve the fibonacci sequence using Dynamic Programming.
console.log("\n------------------------Task 10------------------------")
const fibonacciSequence = (n) => {
    if (n <= 1) return n;

    const fib = [0, 1] // Base cases

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

let num = 5;
console.log(`Fibonacci series upto ${num} terms : ${fibonacciSequence(num - 1).join(' ')}`);

console.log();

num = 10;
console.log(`Fibonacci series upto ${num} terms : ${fibonacciSequence(num - 1).join(' ')}`);