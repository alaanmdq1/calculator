const displayPrevValue = document.getElementById('prev-value')
const displayActualValue = document.getElementById('actual-value')
const buttonNumber = document.querySelectorAll('.number')
const buttonOperator = document.querySelectorAll('.operator')

//const Calculadora = new Calculator()

const display = new Display(displayPrevValue, displayActualValue)

buttonNumber.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML)
    })
})

buttonOperator.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
})