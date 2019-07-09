const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...next) => curry(fn.bind(f, ...args), ...next)
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
const all = (...args) => value => args.map(fn => fn(value)).every(res => res)
const tap = value => (console.log(value), value)
const map = list => fn => list.map(fn)
const assoc = (key, value) => obj => ({...obj, [key]: value})

const user = {
  id: 123,
  isSeller: false, 
  address: {
    country: 'france'
  }
}

const result = assoc('isSeller', true)(user)

console.log(result)