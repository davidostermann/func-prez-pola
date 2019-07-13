exports.curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...next) => curry(fn.bind(f, ...args), ...next)
const compose = (exports.compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x))
exports.pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
exports.all = (...args) => value => args.map(fn => fn(value)).every(res => res)
exports.tap = value => (console.log(value), value)

/////////////////////////////////////////

// const validate = function(validationFn) {
//   return function(value) {
//     return validationFn(value)
//   }
// }

////////////////////////////////////////

const not = exports.not = value => !value
exports.isGreaterThan = bound => value => value > bound
exports.isSmallerThan = bound => value => value < bound
exports.isInteger = value => value % 1 === 0
exports.isMultipleOf = coefficient => value => value % coefficient === 0
const isEqualTo = exports.isEqualTo = a => b => a === b
exports.isNotEqualTo = a => b =>
  compose(
    not,
    isEqualTo(a)
  )(b)
exports.add = a => b => a + b
exports.multiply = a => b => a * b
exports.map = list => fn => list.map(fn)
exports.prop = key => obj => obj && obj[key]
exports.applyTo = fn => value => fn(value)
exports.assoc = (key, value) => obj => ({ ...obj, [key]: value })
exports.mapObject = fn => obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ((acc[key] = fn(value)), acc),
    {}
  )
exports.applySpec = spec => obj =>
  Object
  .entries(obj)
  .reduce((a, [k, v]) => ((a[k] = spec[k](v)), a), {})