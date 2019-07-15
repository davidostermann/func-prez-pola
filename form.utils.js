const { map, pipe, filter } = require('./utils')

const applyRule = value => ({ validFn, errorFn }) =>
  !validFn(value) && errorFn(value)

exports.applyRules = (...rules) => value =>
  pipe(
    map(applyRule(value)),
    filter(v => v)
  )(rules)
