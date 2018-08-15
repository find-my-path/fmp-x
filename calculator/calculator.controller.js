const calculatorService = require('./calculator.service')
const { logger } = require('../utils')
const Operation = require('./models/operation')

exports.add = (req, res) => {
    const input1 = req.body.input1
    const input2 = req.body.input2

    const result = {
        parameter1: input1,
        parameter2: input2,
        operation: 'add',
        result: calculatorService.add(input1, input2)
    }

    const operation = new Operation(result)
    operation.save((err, result) => {
        if (err) return logger.error('Failed to save operation')
        res.send(result)
    })
}

exports.subtract = (req, res) => {
    const input1 = req.body.input1
    const input2 = req.body.input2

    const result = {
        parameter1: input1,
        parameter2: input2,
        operation: 'subtract',
        result: calculatorService.subtract(input1, input2)
    }

    const operation = new Operation(result)
    operation.save((err, result) => {
        if (err) return logger.error('Failed to save operation')
        res.send(result)
    })
}

exports.multiply = (req, res) => {
    const input1 = req.body.input1
    const input2 = req.body.input2

    const result = {
        parameter1: input1,
        parameter2: input2,
        operation: 'multiply',
        result: calculatorService.multiply(input1, input2)
    }
    
    const operation = new Operation(result)
    operation.save((err, result) => {
        if (err) return logger.error('Failed to save operation')
        res.send(result)
    })
}

exports.divide = (req, res) => {
    const input1 = req.body.input1
    const input2 = req.body.input2

    const result = {
        parameter1: input1,
        parameter2: input2,
        operation: 'divide',
        result: calculatorService.divide(input1, input2)
    }
    
    const operation = new Operation(result)
    operation.save((err, result) => {
        if (err) return logger.error('Failed to save operation')
        res.send(result)
    })
}