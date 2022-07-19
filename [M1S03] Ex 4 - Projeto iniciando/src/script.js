const GuestList = function(name,lastName,sector,age){
  this.name = name,
  this.lastName = lastName,
  this.sector = sector,
  this.age = age

}

const list = []

const guest1 = new GuestList("Alan","Matheus","Camarote","19")

list.push(guest1)
