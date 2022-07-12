let number = 0
let text = document.getElementById('number')

const sumNumber = function () {
  number += 1
  text.innerHTML = number.toString()
}

const subNumber = function () {
  number -= 1
  text.innerHTML = number.toString()
}
