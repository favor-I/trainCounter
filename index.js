
let countEl = document.getElementById("count-el")
let count  = 0 

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let dispCount = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += dispCount
    countEl.textContent = 0
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0

    
}// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
let names = " Frank"
let greeting = "Welcome back ,"

// and the greeting we want to render on the page
let myGreeting = greeting + names
myGreeting += "👋"

// Render the welcome message using welcomeEl.innerText
welcomeEl.textContent = myGreeting


