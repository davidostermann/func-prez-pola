const applyValidation = function(form) {
  const errors = {
    quantity: [],
    email: []
  }
  if (form) {
    if (form.quantity) {
      if (form.quantity < 40) {
        errors.quantity.push(
          `${form.quantity} is less than orderable minimum quantity`
        )
      }

      if (form.quantity > 70) {
        errors.quantity.push(
          `${form.quantity} is greater than remaining stock quantity`
        )
      }

      if (form.quantity % 10 !== 0) {
        errors.quantity.push(
          `You can only buy package of 10. To have ${form.quantity}, you need to buy ${Math.ceil(form.quantity / 10) * 10}`
        )
      }

      if (form.quantity === 50) {
        errors.quantity.push(`You can only buy 50 because of this silly rule`)
      }
    } else {
      errors.quantity.push(`You must specify a quantity`)
    }

    if (form.email) {
      if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email.push(`${form.email} is not a valid email`)
      }
    } else {
      errors.email.push(`You must specify an email`)
    }
  }
  return errors
}

const result = applyValidation({
  quantity: 23,
  email: "tttttt.fr"
})

console.log('Bad way : ', result)