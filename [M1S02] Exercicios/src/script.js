const showData = function () {
  let nome = document.getElementById('nome').value
  let telefone = document.getElementById('telefone').value
  let email = document.getElementById('email').value

  console.log(`Nome: ${nome} Telefone: ${telefone} Email: ${email}`)

  alert('Dados enviado com sucesso!')
}
