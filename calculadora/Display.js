class Display {
    constructor(displayPrevValue, displayActualValue) {
        this.displayPrevValue = displayPrevValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator()
        this.operatorType = undefined
        this.actualValue = ''
        this.prevValue = ''
        this.operator = {
            sum: '+',
            divide: '%',
            mul: '*',
            sub: '-'
        }
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0, -1)
        this.writeValue()
    }

    deleteAll() {
        this.actualValue = ''
        this.prevValue = ''
        this.operatorType = undefined
        this.writeValue()
    }

    addNumber(number) {
        if(number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString()
        this.writeValue()
    }

    writeValue() {
        this.displayActualValue.textContent = this.actualValue
        this.displayPrevValue.textContent = `${this.prevValue} ${this.operator[this.operatorType] || ''}` 
    }

    calculate() {
        const prevValue = parseFloat(this.prevValue)
        const actualValue = parseFloat(this.actualValue)

        if(isNaN(actualValue) || isNaN(prevValue)) return
        this.actualValue = this.calculator[this.operatorType](prevValue, actualValue)
    }

    compute(type) {
        this.operatorType !== 'total' && this.calculate()
        this.operatorType = type
        this.prevValue = this.actualValue || this.prevValue
        this.actualValue = ''
        this.writeValue()
    }
}