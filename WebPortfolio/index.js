window.onload = function(){

  const img = document.querySelectorAll('.images');
  for(let i = 0; i<img.length;i++){
    img[i].addEventListener("click", addclass);

  const images = document.querySelectorAll('.images');

  for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", myfunc);
  }

}


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


function myfunc() {
    this.classList.toggle("imgsize");
}
