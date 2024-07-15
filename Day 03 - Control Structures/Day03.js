//Day 3: Control Structures
//Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const length = 75
const width = -60
const height = 0
if(length > 0){
    console.log("Length is positive number");
}
if(width < 0){
    console.log("Width is negative number");
}
if(height == 0){
    console.log("Height is 0");
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
age = 18
if(age >= 18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}

//Activity 2: Nested If-Else Statements
//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const unit1 = 55
const unit2 = 15
const unit3 = 25

if(unit1 > unit2){
    if(unit1 > unit3){
        console.log("Unit1 is greatest number")
    }
    else{
        console.log("Unit 3 is greatest number")
    }
}
else if(unit2 > unit3){
    console.log("Unit 2 is greatest number");
}
else{
    console.log("Unit 3 is greatest number")
}

//Activity 3: Switch Case
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
weekday = 5
switch(weekday){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input")
}

//Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C, D', 'F) based on a score and log the grade to the console.
score = "91"
switch(true){
    case (score >= 90 && score <= 100):
        console.log("Grade A");
        break;
    case (score >= 80 && score < 90):
        console.log("Grade B");
        break;
    case (score >= 70 && score < 80):
        console.log("Grade c");
        break;
    case (score >= 60 && score < 70):
        console.log("Grade D");
        break;
    case (score >= 50 && score < 60):
        console.log("Grade E");
        break;
    case (score >= 0 && score < 50):
        console.log("Grade F");
        break;
    default:
        console.log("Invalid score")
}

//Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
console.log(weekday % 2 == 0 ? "Even number" : "Odd number")

//Activity 5: Combining Conditions
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
year = 400
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}