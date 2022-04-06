function myFunction(){
  localStorage.setItem("name", "Bob");
  document.getElementById('demo').innerHTML = localStorage.getItem("name");
}
