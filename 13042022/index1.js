$(function(){
  var div = $(".div1");
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);

    if(scroll>=700){
      div.removeClass(".div1").addClass("div2");
      console.log("hello");
    }else{
      div.removeClass("div2").addClass("div1");
      console.log("world");
    }
  })
});
