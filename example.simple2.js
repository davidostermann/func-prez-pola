const {
  compose,
  all,
  isBetween,
  isMultipleOf,
  isNotEqualTo,
  prop,
  apply
} = require("./utils")

/**
 * Good way
 */
const stockValidationFn = all(
  isBetween(40, 70),
  isMultipleOf(10),
  isNotEqualTo(50)
)

const validStock = compose(
  stockValidationFn,
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

console.log("result : ", validStock({ stock: 60 }))
