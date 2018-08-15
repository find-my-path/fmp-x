const calculator = require('./calculator.service')
const expect = require('chai').expect

describe('addition', () => {
    it('should add 2 and 3', () => {
        const sum = calculator.add(2, 3)
        expect(sum).to.be.eq(5)
    })
})

describe('subtraction', () => {
    it('should multiply 2 and 3', () => {
        const difference = calculator.subtract(3, 2)
        expect(difference).to.be.eq(1)
    })
})

describe('multiplication', () => {
    it('should multiply 2 and 3', () => {
        const product = calculator.multiply(2, 3)
        expect(product).to.be.eq(6)
    })
})

describe('division', () => {
    it('should divide 4 and 2', () => {
        const quotient = calculator.divide(4, 2)
        expect(quotient).to.be.eq(2)
    })
    it('should throw on division by zero', () => {
        const quotient = () => calculator.divide(4, 0)
        expect(quotient).to.throw(TypeError, 'Illegal divide')
    })
})