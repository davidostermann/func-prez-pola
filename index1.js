const {
  compose,
  all,
  isGreaterThan,
  isSmallerThan,
  isMultipleOf,
  isNotEqualTo,
  prop,
  applyTo,
} = require("./utils")

////////////////////////////////////////

// const result = validate(v => v > 10)(11)
// const result = validate(isGreaterThan)(11)
// console.log("first : ", validate(isMultipleOf(10))(101))

////////////////////////////////////////

/////////////////////////////////////////

// const validate = function(validationFn) {
//   return function(value) {
//     return validationFn(value)
//   }
// }

////////////////////////////////////////

const validate = applyTo

/**
 * Good way
 */
const stockValidationFn = all(
  isGreaterThan(40),
  isMultipleOf(10),
  isNotEqualTo(50),
  isSmallerThan(70)
)

const validStock = compose(
  validate(stockValidationFn),
  prop("stock")
)

/**
 * Bad way
 */
const validateStock = function(form) {
  if (form) {
    if (form.stock) {
      if (form.stock > 40 && form.stock < 70) {
        if (form.stock % 10 === 0) {
          if (form.stock !== 50) {
            return true
          }
        }
      }
    }
  }
}

console.log("result : ", validStock(60))
