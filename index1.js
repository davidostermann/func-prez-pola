const {
  compose,
  all,
  isBetween,
  isMultipleOf,
  isNotEqualTo,
  prop,
  apply
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

const validate = compose(apply, all)
const isValidQuantity = validate(
  isBetween(40, 70),
  isMultipleOf(10),
  isNotEqualTo(50)
)

const result = isValidQuantity(60)

// const isValidQuantity = function(quantity) {
//   if (quantity > 40 && quantity < 70) {
//     if (quantity % 10 === 0) {
//       if (quantity !== 50) {
//         return true
//       }
//     }
//   }
// }
// const result = isValidQuantity(60)
// console.log("result1 : ", result)

/**
 * Good way
 */
const stockValidationFn = all(
  isBetween(40, 70),
  isMultipleOf(10),
  isNotEqualTo(50)
)

const validStock = compose(
  apply(stockValidationFn),
  prop("stock")
)

/**
 * Bad way
 */
// const validateStock = function(form) {
//   if (form) {
//     if (form.stock) {
//       if (form.stock > 40 && form.stock < 70) {
//         if (form.stock % 10 === 0) {
//           if (form.stock !== 50) {
//             return true
//           }
//         }
//       }
//     }
//   }
// }

console.log("result2 : ", validStock({ stock: 60 }))
