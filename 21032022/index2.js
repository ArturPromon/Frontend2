function loadPerson(){
  var person={
      firstName: "Ivan",
      lastName: "Ivanov",
      age: "50"
  }


  var x = document.getElementById('demo');
  x.innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old ";
}

function loadAnimal(){
  var animal={
    class: "cat",
    Name: "Misu",
    age: "3"
  }
    var x = document.getElementById('demo');
    x.innerHTML = animal.class + " " + animal.Name + " " + animal.age;
}
