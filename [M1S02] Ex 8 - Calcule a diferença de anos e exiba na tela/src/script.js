const calculateDate = function () {
  let yearByClient = window.prompt('Digite um ano: ')
  let year = new Date().getFullYear() - new Number(yearByClient)

  alert(`A diferença de ano é de aproximadamente: ${year} anos`)
}

calculateDate()
