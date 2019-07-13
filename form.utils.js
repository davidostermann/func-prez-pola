const {
  applySpec
} = require('./utils')

exports.getErrors = rules => value =>
  rules.reduce((acc, rule) => {
    const { validFn, errorFn } = rule
    !validFn(value) && acc.push(errorFn(value))
    return acc
  }, [])

