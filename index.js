const { getErrors } = require("./form.utils.js")
const { applySpec } = require('./utils')
  
const {
  stockValidationRuleList,
  emailRuleList
} = require("./business.domain.js")

const getStockErrors = getErrors(stockValidationRuleList)
const getEmailErrors = getErrors(emailRuleList)

const applyValidation = applySpec({
  stock: getStockErrors,
  email: getEmailErrors
})

const result = applyValidation({
  stock: 23,
  email: "tttttt.fr"
})

console.log(result)
