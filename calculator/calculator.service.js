
exports.add = (addend1, addend2) => {
    return addend1 + addend2
}

exports.subtract = (minuend, subtrahend) => {
    return minuend - subtrahend
}

exports.multiply = (factor1, factor2) => {
    return factor1 * factor2
}

exports.divide = (dividend, divisor) => {
    if(divisor === 0) throw new TypeError('Illegal divide')
    return dividend / divisor
}