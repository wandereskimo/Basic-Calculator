
let num1 = 6
let num2 = 3

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sumEl = document.getElementById("sum-el") 

function add() {
    console.log("clicked")
    sumEl.textContent = num1+num2
    console.log(sumEl)
}

function sub() {
    sumEl.textContent = num1-num2
    console.log(sumEl)
}

function multiply() {
    console.log("clicked")
    sumEl.textContent = num1*num2
    console.log(sumEl)
}

function divide() {
    console.log("clicked")
    sumEl.textContent = num1/num2
    console.log(sumEl)
}