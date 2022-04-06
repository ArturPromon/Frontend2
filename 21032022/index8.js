var i = 0;

function getInput(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var myinput = document.getElementById("myInput").value;
  var listitem = document.createElement("li");
  var button = document.createElement("button");
  var buttonName = "Delete";
  document.getElementById('demo').appendChild(listitem);
  button.setAttribute("onclick", "deleteInput"+i+"()");
  button.setAttribute("id", "buttondel" + i);
  listitem.setAttribute("id", "listitem" +i);

  document.getElementById('demo').appendChild(button);
  button.innerHTML = buttonName;


if(minutes<10 && seconds<10){
  listitem.innerHTML = myinput + " " + hours + ":0" + minutes + ":0" + seconds;
}else if(minutes<10){
  listitem.innerHTML = myinput + " " + hours + ":0" + minutes + ":" + seconds;
}else if (seconds<10) {
  listitem.innerHTML = myinput + " " + hours + ":" + minutes + ":0" + seconds;
}else{
  listitem.innerHTML = myinput + " " + hours + ":" + minutes + ":" + seconds;
}

i++;
}
function deleteInput0(){
  var x = document.getElementById("listitem0");
  var y = document.getElementById("buttondel0");
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);
}
function deleteInput1(){
  var x = document.getElementById("listitem1");
  var y = document.getElementById("buttondel1");
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);
}
function deleteInput2(){
  var x = document.getElementById("listitem2");
  var y = document.getElementById("buttondel2");
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);
}
function deleteInput3(){
  var x = document.getElementById("listitem3");
  var y = document.getElementById("buttondel3");
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);
}
