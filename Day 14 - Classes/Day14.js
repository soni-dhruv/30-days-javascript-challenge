//Day 14: Classes

//Activity 1: Class Definition
//Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
console.log("------------------------Task 1------------------------")
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello ${this.name}, Good Morning!`
    }

    static greetMssg() {
        return `Good evening friends! Wanna grab some coffee?`
    }
}
const p = new Person("Jon", 35)
console.log(p.greet())

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
console.log("------------------------Task 2------------------------")
console.log(`The present age is ${p.age}`)

Person.prototype.updateAge = function () {
    this.age += 5
    return `Updated age is ${this.age}`
}
console.log(p.updateAge())

//Activity 2: Class Inheritance
//Task 3: Define a class Student that ec=xtends the Person class. Add a property studentId and a method to return the student ID. Create an instancec of the Student class and log the student ID.
console.log("------------------------Task 3------------------------")
class Student extends Person {
    static studentCount = 0

    constructor(name, age, studentID) {
        super(name, age)
        this.studentID = studentID
        Student.studentCount++
    }

    getStudentId() {
        return `The id of student is ${this.studentID}`
    }

    greet() {
        return `Hello ${this.name}, your id is ${this.studentID}. Good to see you again`
    }
}

const student = new Student('John', 20, '123')
console.log(student.getStudentId())

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message
console.log("------------------------Task 4------------------------")
const person = new Person('David', 35)
console.log(person.greet())

const stu = new Student('Rohit', 38, '100')
console.log(stu.greet())
/*
Note:
- When greet is called on an instance of Person, it uses the Person class's greet method.
- When greet is called on an instance of Student, it uses the Student class's greet method, which overrides the one from Person.
*/

//Activity 3: Static Methods and Properties
//Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log("------------------------Task 5------------------------")
const mssg = Person.greetMssg()
console.log(mssg)

//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log("------------------------Task 6------------------------")
const stu1 = new Student('Karan', 28, '4352')
const stu2 = new Student('Niraj', 38, '4382')
const stu3 = new Student('Virat', 48, '4952')

const totalStudents = Student.studentCount
console.log(`The total number of students are ${totalStudents}`)

//Activity 4: Getters and Setters
//Task 7: Add a getter method to the Person class to return the full name (assume a firstllane and lastiane property). Create an instance and log the full name using the getter.
console.log("------------------------Task 7------------------------")
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const per = new Person2("Sandeep", "Wadhwan")
console.log(`Full name is ${per.fullName}`)

//Task 8: Add a setter method to the Person class to update the name properties (firstliane and lastiane). Update the name using the setter and log the updated full name.
console.log("------------------------Task 8------------------------")
const anotherPerson = new Person2("Jon", "Dan")
console.log(anotherPerson.firstName)
//Note: (Note : The reason you don't use parentheses with console.log(person.fullName) is that the getter is not a regular method but a property accessor. The get keyword defines a getter method, and when you access fullName, JavaScript automatically calls the getter method behind the scenes.) (So when using a getter and setter methods, they are accessed like a property rather than a method.)

anotherPerson.fullName = "James Phoenix"
console.log(`Updated name becomes ${anotherPerson.fullName}`)

//Activity 5: Private Fields (Optional)
//Task 9: Define a Class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
console.log("------------------------Task 9------------------------")
class Account {
    //Private field named 'balance'
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
        } else {
            console.error(`Deposit amount must be positive`)
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount
            } else {
                console.error(`Insufficient withdrawal amount`)
            }
        } else {
            console.error(`Withdrawal amount must be positive`)
        }
    }

    getBalance() {
        return `The total balance is ${this.#balance}`
    }
}

//Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const acc = new Account(180)

acc.deposit(50)
console.log(acc.getBalance())

acc.withdraw(40)
console.log(acc.getBalance())

acc.withdraw(300)
console.log(acc.getBalance())