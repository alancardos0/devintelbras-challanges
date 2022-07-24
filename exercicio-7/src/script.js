const CreatePerson = function (name, lastName, sector, age) {
  this.name = name,
  this.lastName = lastName,
  this.sector = sector,
  this.age = age
}

const person1 = new CreatePerson('Alan', 'Matheus', 'Pista', '18')
const person2 = new CreatePerson('Alan', 'Matheus', 'Camarote', '18')
const person3 = new CreatePerson('Alan', 'Matheus', 'Arquibancada', '18')


const separateClues = function (object) {
  const objectToArray = Array(object)

  objectToArray.forEach(item =>{
    switch(item.sector){
      case "Camarote":
        let ulCabin= document.getElementById("ul-camarote")
        let liCabin= document.createElement("li")
        ulCabin.appendChild(liCabin)  
        liCabin.appendChild(document.createTextNode(item.name + " " + item.lastName))
        break;
      case "Pista":
        let ulTrack= document.getElementById("ul-pista")
        let liTrack = document.createElement("li")
        ulTrack.appendChild(liTrack)  
        liTrack.appendChild(document.createTextNode(item.name + " " + item.lastName))
        break;
      case "Arquibancada":
        let ulBleachers = document.getElementById("ul-arquibancada")
        let liBleachers = document.createElement("li")
        ulBleachers.appendChild(liBleachers)  
        liBleachers.appendChild(document.createTextNode(item.name + " " + item.lastName))
        break;
    }
  })
}
separateClues(person1)
separateClues(person2)
separateClues(person3)
