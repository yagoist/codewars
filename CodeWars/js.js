const obj = {

    checkingTheInput() {
        let answer = +prompt('введите число')
        if (answer < 0 || answer > 999 || isNaN(answer)) {
            alert('Введено некорректное число, повторите ввод')
            this.checkingTheInput()
        } else {
            this.generateAnswer(answer)
        }
    },

    generateAnswer(number) {
        if (String(number).length === 3) {
            this.hundreds = this.addFirst(number)
            this.dozens = this.addSecond(number)
            this.units = this.addThird(number)
            alert(`Сотен: ${this.hundreds}, десяток: ${this.dozens}, единиц: ${this.units}`)
        }
        if (String(number).length === 2) {
            this.dozens = this.addFirst(number)
            this.units = this.addSecond(number)
            alert(`Десяток: ${this.dozens}, единиц: ${this.units}`)
        }
        if (String(number).length === 1) {
            this.units = this.addFirst(number)
            alert(`Единиц: ${this.units}`)
        }
    },

    addFirst(first) {
        return parseInt(String(first)[0])
    },
    addSecond(second) {
        return parseInt(String(second)[1])
    },
    addThird(third) {
        return parseInt(String(third)[2])
    },

    init() {
        this.checkingTheInput()
    },

}
obj.init()
