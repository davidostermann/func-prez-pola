const { map, tap, pipe, filter } = require("./utils")

exports.getErrors = rules => value =>
  rules.reduce((acc, rule) => {
    const { validFn, errorFn } = rule
    !validFn(value) && acc.push(errorFn(value))
    return acc
  }, [])

const applyRule = value => ({ validFn, errorFn }) => !validFn(value) && errorFn(value)

const applyRules = exports.applyRules = (...rules) => value =>
  pipe(
    map(applyRule(value)),
    filter(v => v)
  )(rules)
