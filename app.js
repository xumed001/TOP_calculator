// Calulator app
const keys = document.querySelector('.calulator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return
    
    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    
    if (key.classList.contains('number')) {
        if (displayValue === '0') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    if (key.classList.contains('operator')){
        console.log(key)
    }
    
})


// adding
function add(a, b) {
    return a + b
}

// subtracts
function subtract(a, b){
    return a - b
}

// multiply
function multiply(a, b){
    return a * b
}

// divide
function divide(a, b){
    let ans = a / b
    return Number(ans.toFixed(2))
}


