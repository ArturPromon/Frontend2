function getMyInput1(){
  var x = document.getElementById('myInput1').value;
  document.getElementById("demo1").innerHTML = x;
}

function deleteMyInput1(){
  document.getElementById('demo1').innerHTML = "";
}

function getMyInput2(){
  var x = document.getElementById('myInput2').value;
  document.getElementById("demo2").innerHTML = x;
}

function deleteMyInput2(){
  document.getElementById('demo2').innerHTML = "";
}

function myFunction1(){
  var element = document.body;
  element.className = "Light-mode";
}

function myFunction2(){
  var element = document.body;
  element.className = "Night-mode";
}

function myFunction3(){
  var element = document.body;
  element.classList.toggle("Night-mode");
}
