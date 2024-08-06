//Day 10: Event Handling

//Activity 1: Basic Event Handling
//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const element = document.getElementById("buttonElement")
const paragraph = document.getElementById("paragraphElement")
element.addEventListener("click", function () {
    paragraph.textContent = "This is the new text"
})

//Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.getElementById("testImage")
image.addEventListener("dblclick", function () {
    if (image.style.display === "none") {
        image.style.display = "block"
    } else {
        image.style.display = "none"
    }
})

//Activity 2: Mouse Events
//Task 3: Add a mouseover event listener to an element that changes its background color.
const hoverElementdiv = document.getElementById("hoverElement")
hoverElementdiv.addEventListener("mouseover", function () {
    hoverElementdiv.style.backgroundColor = "yellow"
})

//Task 4: Add a mouseout event listener to an element that resets its background color.
hoverElementdiv.addEventListener("mouseout", function () {
    hoverElementdiv.style.backgroundColor = "grey"
})

//Activity 3: Keyboard Events
//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
myInputfield.addEventListener("keydown", function (event) {
    console.log(`Key press: ${event.key}`)
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
myInputfield.addEventListener("keyup", function () {
    const paragraphElement = document.getElementById("inputfield Paragraph")
    paragraphElement.textContent = `Current text in Input Field : ${paragraphElement.value}`
})

//Activity 4: Form Events
//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("myForm")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    const formData = new FormData(form)
    console.log(formData)
    for (let [name, value] of formData.entries()) {
        console.log(`${name} : ${value}`)
    }
})

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectedElement = document.getElementById("selectColor")
const displayParagraph = document.getElementById("SelectedValue")
selectedElement.addEventListener("change", function () {
    displayParagraph.textContent = `Selected color is ${selectedElement.value}`
})

//Activity 5: Event Delegation
//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const clickedItem = document.getElementById("list")
clickedItem.addEventListener("click", function (event) {
    console.log(`Clicked ${event.target.textContent}`)
})

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener("DOMContentLoaded", () => {
    const parent = document.getElementById("parent")
    const addChildButton = document.getElementById("addChildElements")

    //Event Listener on the parent element
    parent.addEventListener("click", (event) => {
        if (event.target && event.target.matches(".child")) {
            console.log(`Child element is clicked: ${event.target}`)
        }
    })

    //Function to add a new child element
    const addChildElements = () => {
        const newChild = document.createElement("div")
        newChild.className = "child"
        newChild.textContent = "I am a child element"
        parent.appendChild(newChild)
    }

    //Add child element on button click
    addChildButton.addEventListener("click", addChildElements)
})
