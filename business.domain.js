const {
  isGreaterThan,
  isSmallerThan,
  isMultipleOf,
  isNotEqualTo,
} = require("./utils")

const isGreater40Rule = {
  validFn: isGreaterThan(40),
  errorFn: value => `${value} must be greater than 40`
}

const isMultipleOf10Rule = {
  validFn: isMultipleOf(10),
  errorFn: value => `${value} must be mutiple of 10`
}

const isNotEqualTo50Rule = {
  validFn: isNotEqualTo(50),
  errorFn: value => `${value} must not be equal to 50`
}

const isSmallerThan70Rule = {
  validFn: isSmallerThan(70),
  errorFn: value => `${value} must be smaller than 70`
}

const isValidEmailRule = {
  validFn: value => /\S+@\S+\.\S+/.test(value),
  errorFn: value => `${value} must be a valid email`
}

exports.stockValidationRuleList = [
  isGreater40Rule,
  isMultipleOf10Rule,
  isNotEqualTo50Rule,
  isSmallerThan70Rule
]

exports.emailRuleList = [isValidEmailRule]
