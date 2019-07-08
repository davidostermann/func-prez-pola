const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...next) => curry(fn.bind(f, ...args), ...next)
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const all = (...args) => value => args.map(fn => fn(value)).every(res => res)
const tap = value => (console.log(value), value)

/////////////////////////////////////////

// const validate = function(validationFn) {
//   return function(value) {
//     return validationFn(value)
//   }
// }

////////////////////////////////////////

// const validate = fn => value => fn(value)

////////////////////////////////////////
const not = value => !value
const isGreaterThan = bound => value => value > bound
const isLesserThan = bound => value => value < bound
const isInteger = value => value % 1 === 0
const isMultipleOf = coefficient => value => value % coefficient === 0
const isEqualTo = a => b => a === b
const isNotEqualTo = a => b =>
  compose(
    not,
    isEqualTo(a)
  )(b)
const add = a => b => a + b
const multiply = a => b => a * b
////////////////////////////////////////

// const result = validate(v => v > 10)(11)
// const result = validate(isGreaterThan)(11)
// console.log("first : ", validate(isMultipleOf(10))(101))

/**
 * Good way
 */
// const validationFn = all(
//   isGreaterThan(40),
//   isMultipleOf(10),
//   isNotEqualTo(50),
//   isLesserThan(70)
// )

// const result = validate(validationFn)(60)

/**
 * Bad way
 */
// const validate = function(value) {
//   if (value > 40 && value < 70) {
//     if (value % 10 === 0) {
//       if (value !== 50) {
//         return true
//       }
//     }
//   }
// }

const result = validate(60)

console.log("second : ", result)
