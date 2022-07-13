let guestList = [
  { nome: 'José', sobrenome: 'Carlos' },
  { nome: 'Alessandro', sobrenome: 'Viana' },
  { nome: 'Paula', sobrenome: 'Souza' },
  { nome: 'Cristian', sobrenome: 'Schimit' },
  { nome: 'Beatriz', sobrenome: 'Viana' },
  { nome: 'Fernanda', sobrenome: 'Silveira' },
  { nome: 'Cláudia', sobrenome: 'Torres' },
  { nome: 'Augusto', sobrenome: 'Cesar' },
  { nome: 'Noemi', sobrenome: 'Nakamura' },
  { nome: 'Pedro', sobrenome: 'Lobo' }
]

let list = []

guestList.forEach(item => {
  const itens = item.nome + ' ' + item.sobrenome
  list.push(itens)
})

for (i in list) {
  let ul = document.getElementById('ul')
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(list[i]))
  ul.appendChild(li)
}
