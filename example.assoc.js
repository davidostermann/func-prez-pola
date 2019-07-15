const user = {
  id: 123,
  isSeller: false,
  address: {
    country: "france"
  }
}

const result = assoc("isSeller", true)(user)

console.log(result)
