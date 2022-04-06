let login2;
let password2;

window.onload = function(){
    document.querySelector('#btnl').addEventListener("click", getLocal);

    login2 = document.querySelector('#username2');
    password2 = document.querySelector('#password2');
}

function getLocal(){
    let localValue = localStorage.getItem("registration");
    let loginValue = JSON.parse(localValue).login;
    let passwordValue = JSON.parse(localValue).password;

    // console.log(loginValue, passwordValue);
    if(login2.value == loginValue && password2.value == passwordValue){
      location.href="https://www.youtube.com";
    }else{
      alert("Invalid login or password!");
    }

 }
