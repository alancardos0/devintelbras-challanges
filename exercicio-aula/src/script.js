function tabuada() {
  const numero = document.getElementById('number').value
  const ul = document.getElementById('ul')
  ul.innerHTML = ''
  for (let i = 0; i <= 10; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = `${numero} * ${i} = ` + numero * i
  }
}
