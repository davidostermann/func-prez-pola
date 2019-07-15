const { pipe, map } = require('./utils')

const toUpperCase = str => str.toUpperCase()
const split = separator => str => str.split(separator)
const join = separator => list => list.join(separator)
const substr = (start, length) => str => str.substr(start, length)

const generateQuadri = pipe(
  split(' '),
  map(toUpperCase),
  map(substr(0, 2)),
  join('')
)

generateQuadri('david ostermann') // DAOS

// console.log('result : ', result)
