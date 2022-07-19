let valueNumber = window.prompt("Digite um número")
let anotherNumber = window.prompt("Digite outro número")
let calculateOperation = window.prompt("Digite uma operação de calculo")

valueNumber = Number(valueNumber)
anotherNumber = Number(anotherNumber)

switch(calculateOperation){
  case "*": alert(valueNumber * anotherNumber)
  break;

  case "+" : alert(valueNumber + anotherNumber)
  break;

  case "-" : alert(valueNumber - anotherNumber)
  break;
  
  case "/" : alert(valueNumber / anotherNumber)
}