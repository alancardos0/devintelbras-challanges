const checkAge = function (object) {
  const objectToArray = Array(object)

  objectToArray.forEach(item => {
    if (item.age >= 18) {
      objectToArray.push('openBar', true)
    }
  })
}

const object = {
  name: 'Alan',
  age: 18
}

checkAge(object)
