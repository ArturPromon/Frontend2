window.onload = function(){
  const images = document.querySelectorAll('.images');

  for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", myfunc);
  }

}

function myfunc() {
    this.classList.toggle("imgsize");
}
