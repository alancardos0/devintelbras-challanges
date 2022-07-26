const contasClientes = [
  {
  id: 1,
  nome: 'Cliente 01',
  saldo: 500,
  password:""
  },
  {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    password:""
    },
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 3000,
      password:""
      },
  ];
 
  const getAndCalculateValue = function(){
    let client = document.getElementById("nameClient")
    let valor = document.getElementById("money").value || 0
    let bankAccount = document.getElementById("bankAccount").value
    let password = document.getElementById("password").value
    let newValue  = Number(valor)
  
    contasClientes.forEach(item =>{
      let option = new Option(item.nome,item.id)
      client.options[client.options.length] = option
      
      if(client.value == item.id && bankAccount == "Saque"){
       item.password = password
       return item.saldo - newValue
      }

      if(client.value == item.id && bankAccount == "Depositar"){
        item.password = password
        return item.saldo + newValue
      }
      
     }) 
  }