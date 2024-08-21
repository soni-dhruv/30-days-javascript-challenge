//Day 17: Data Structures

//Activity 1: Linked List
//Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//Task 2: Implement a Linkedlist class with methods to add a node to the end, remove a node from the end, and display all nodes.
console.log("\n------------------------Task 2------------------------")
class ListNode {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addNode(nodeData) {
        const newNode = new Node(nodeData)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    removeNode() {
        if (this.head === null) return null

        //If there is only one node
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            let current = this.head
            while (current.next !== this.tail) {
                current = current.next
            }
            current.next = null
            this.tail = current
        }
        this.size--
    }

    displayNodes() {
        let current = this.head
        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }
}

let list = new ListNode();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
list.addNode(600);
list.addNode(700);

console.log("List after adding nodes: ");
list.displayNodes();
console.log();

list.removeNode();
list.removeNode();

console.log();

console.log("List after removing nodes: ");
list.displayNodes();

//Activity 2: Stack
// Task 3 : Implement a Stack class with methods push (add element), pop (remove element) and peek (view the top element).
console.log("\n------------------------Task 3------------------------")
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
        console.log(`Element ${element} is pushed into stack`)
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Underflow")
            return "Underflow"
        }
        const poppedElement = this.items.pop()

        return poppedElement
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if (this.isEmpty()) {
            return `Stack is empty`
        }

        return this.items[this.items.length - 1]
    }

    displayStackElements() {
        let items = ""
        for (let i = 0; i < this.items.length; i++) {
            items += this.items[i] + " "
        }
        return items
    }
}

const stack = new Stack();

stack.push(4);
stack.push(60);
stack.push(32);
stack.push(12);
stack.push(79);

console.log();

console.log(`The elements present in stack are : ${stack.displayStackElements()}`);

stack.pop();
stack.pop();
console.log();

console.log(`The elements present in stack after pop are : ${stack.displayStackElements()}`);

// Task 4 : Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
console.log("\n------------------------Task 4------------------------")
const st = new Stack()
const string = "david"

for (let char of string) {
    st.push(char)
}
console.log()

console.log(`This string becomes : ${st.displayStackElements().split('').filter(char => char !== ' ').join('')}`)

let reversedString = ""
while (!st.isEmpty()) {
    reversedString += st.pop()
}

console.log(`The reversed string is: ${reversedString}`)

//Activity 3: Queue
//Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
console.log("\n------------------------Task 5------------------------")
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log(`Queue underflow`)
            return "Queue underflow"
        } else {
            return this.items.shift()
        }
    }

    front() {
        if (this.isEmpty()) {
            console.log(`Queue is empty`)
            return
        } else {
            return this.items[0]
        }
    }

    isEmpty() {
        return this.items.length === 0
    }

    displayQueue() {
        return this.items.join(', ')
    }
}
const q = new Queue();

q.enqueue(34);
q.enqueue(56);
q.enqueue(19);
q.enqueue(60);
q.enqueue(75);
q.enqueue(100);
q.enqueue(40);

console.log(`The items present in queue are : ${q.displayQueue()}`);

console.log(`${q.dequeue()} is removed from front`);
console.log(`${q.dequeue()} is removed from front`);
console.log(`${q.dequeue()} is removed from front`);

console.log();

console.log(`The items present in queue are : ${q.displayQueue()}`);
console.log();

console.log(`The front element is ${q.front()}`);

//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
console.log("\n------------------------Task 6------------------------")
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(printJob) {
        this.queue.enqueue(printJob);
        console.log(`Job added : ${printJob}`);
    }

    processJob() {
        if (this.queue.isEmpty()) {
            console.log(`No jobs to process`);
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
    }

    viewNextJob() {
        const job = this.queue.front();
        if (job === null) {
            console.log(`No jobs in queue`);
        } else {
            console.log(`The next job is ${job}`);
        }
    }

    displayQueue() {
        if (this.queue.isEmpty()) {
            console.log("The queue is empty.");
        } else {
            console.log(`Current queue : ${this.queue.displayQueue()}`);
        }
    }
}

const queue = new PrinterQueue();

queue.addJob("Software Developer");
queue.addJob("Frontend Engineer");
queue.addJob("UI/UX Designer");
queue.addJob("Backend Developer");
queue.addJob("ReactJS Developer");
queue.addJob("Java Developer");

console.log();

queue.displayQueue();
console.log();

queue.processJob();
console.log();

queue.processJob();
console.log();

queue.viewNextJob();
console.log();

queue.displayQueue();

//Activity 4: Binary Tree
//Task 7 : Implement a TreeNode class to represent a node in a binary tree with properties value, left and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8 : Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null
    }

    isTreeEmpty() {
        return this.root === null
    }

    createTree(value) {
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    inOrderTraversal() {
        const result = []
        this.traversal(this.root, result)
        return result
    }

    traversal(node, result) {
        if (node != null) {
            this.traversal(node.left, result)
            result.push(node.value)
            this.traversal(node.right, result)
        }
    }
}
const tree = new BinaryTree();

tree.createTree(23);
tree.createTree(14);
tree.createTree(10);
tree.createTree(45);
tree.createTree(32);
tree.createTree(50);
tree.createTree(3);

console.log("In-Order Traversal : ");
console.log(tree.inOrderTraversal());