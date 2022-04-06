let array = ["Audi","BMW", "Lexus", "Toyota"];
console.log(array.length);

let sum = 0;
let numbers = [20,30,40,50,60,70,80,90,100,12,24,65,46,7,67,767,5];
for(let i = 0;i<numbers.length;i++){
  sum = sum + numbers[i];
  console.log(numbers[i]);
}

function myFunction(){
  var x = document.getElementById('demo');
  for(let i = 0; i<array.length; i++){
    var p = document.createElement("p");
    x.appendChild(p);
    p.innerHTML = array[i];
    p.setAttribute("id", "mark"+i);
  }
}
