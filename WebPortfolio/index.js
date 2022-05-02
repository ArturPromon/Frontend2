window.onload = function(){
  const img = document.querySelectorAll('.images');
  for(let i = 0; i<img.length;i++){
    img[i].addEventListener("click", addclass);
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

}
