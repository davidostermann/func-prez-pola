const { getErrors, applyRules } = require("./form.utils.js")
const { applySpec } = require('./utils')
  
const {
  isQuantityDefined,
  isGreater40Rule,
  isMultipleOf10Rule,
  isNotEqualTo50Rule,
  isSmallerThan70Rule,
  isEmailDefined,
  isValidEmailRule
} = require("./business.domain.js")

const getQuantityErrors = applyRules(
  isQuantityDefined,
  isGreater40Rule,
  isMultipleOf10Rule,
  isNotEqualTo50Rule,
  isSmallerThan70Rule
)
const getEmailErrors = applyRules(
  isEmailDefined, 
  isValidEmailRule
)

const applyValidation = applySpec({
  quantity: getQuantityErrors,
  email: getEmailErrors
})

const result = applyValidation({
  quantity: 23,
  email: "tttttt.fr"
})

console.log(result)

// { quantity: [ 
//   '23 must be greater than 40', 
//   '23 must be mutiple of 10' ],
//   email: [ 'tttttt.fr must be a valid email' ] }
