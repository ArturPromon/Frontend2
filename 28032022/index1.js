let login;
let password;

window.onload = function(){
    document.querySelector('#btnr').addEventListener("click", saveLocal);
    login = document.querySelector('#username1');
    password = document.querySelector('#password1');
}

 function saveLocal(){
   let obj = {
     login: login.value,
     password:password.value
   }
   localStorage.setItem("registration", JSON.stringify(obj));
 }
