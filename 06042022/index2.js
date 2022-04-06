window.onload = function () {
  random();
  timer();
}

function random(){
  var random;
  while(true){
    random = Math.floor(Math.random()*1000000);
    if(random >=100000){
      document.getElementById('random').innerHTML = random;
      break;
    }
  }
}



function timer(){
  var timeleft = 1000;
  var downloadTimer = setInterval(function(){
    if(timeleft <=0){
      clearInterval(downloadTimer);
    }
    document.getElementById("timer").value = timeleft;
    timeleft -= 1;
  },10);
}

var intervalId= window.setInterval(function(){
  random();
  timer();
},10500)
