window.onload = function(){
<<<<<<< HEAD
  const img = document.querySelectorAll('.images');
  for(let i = 0; i<img.length;i++){
    img[i].addEventListener("click", addclass);
=======
  const images = document.querySelectorAll('.images');

  for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", myfunc);
>>>>>>> 35abb610a72d01ac8047ec30850b9a58e9cd7553
  }

}

<<<<<<< HEAD
function addclass(){
  const img = document.querySelectorAll('.images');

    if(this.classList.contains("imgsize")){
        this.classList.toggle("imgsize");
    }else{
      this.classList.remove("imgsize");
      for(let i = 0; i<img.length;i++){
          img[i].classList.remove("imgsize");
      }
        this.classList.toggle("imgsize");
    }

=======
function myfunc() {
    this.classList.toggle("imgsize");
>>>>>>> 35abb610a72d01ac8047ec30850b9a58e9cd7553
}
