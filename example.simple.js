const {
  compose,
  all,
  isBetween,
  isMultipleOf,
  isNotEqualTo,
  prop,
  apply
} = require("./utils")

const validate = compose(
  apply,
  all
)
const isValidQuantity = validate(
  isBetween(40, 70),
  isMultipleOf(10),
  isNotEqualTo(50)
)

const result = isValidQuantity(60)

////////////////////////////////////////

// Bad way

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
