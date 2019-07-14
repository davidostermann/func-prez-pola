const {
  isGreaterThan,
  isSmallerThan,
  isMultipleOf,
  isNotEqualTo,
  isDefined
} = require("./utils")

const applyRule = ({validFn, errorFn}) => value => validFn(value) && errorFn(value)

const isMultipleOf10Rule = (exports.isMultipleOf10Rule = {
  validFn: isMultipleOf(10),
  errorFn: value => `${value} must be mutiple of 10`
})

const isNotEqualTo50Rule = (exports.isNotEqualTo50Rule = {
  validFn: isNotEqualTo(50),
  errorFn: value => `${value} must not be equal to 50`
})

const isSmallerThan70Rule = (exports.isSmallerThan70Rule = {
  validFn: isSmallerThan(70),
  errorFn: value => `${value} must be smaller than 70`
})

const isQuantityDefined = (exports.isQuantityDefined = {
  validFn: isDefined,
  errorFn: value => `Quantity is not defined`
})

const isValidEmailRule = (exports.isValidEmailRule = {
  validFn: value => /\S+@\S+\.\S+/.test(value),
  errorFn: value => `${value} must be a valid email`
})

const isEmailDefined = (exports.isEmailDefined = {
  validFn: isDefined,
  errorFn: value => `Email is not defined`
})

exports.stockValidationRuleList = [
  isQuantityDefined,
  isGreater40Rule,
  isMultipleOf10Rule,
  isNotEqualTo50Rule,
  isSmallerThan70Rule
]

exports.emailRuleList = [isEmailDefined, isValidEmailRule]
