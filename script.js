
var closeBtn1 = document.querySelector(".closeBtn1");
var closeBtn2 = document.querySelector(".closeBtn2");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var block1 = document.querySelector(".block1");
var block2 = document.querySelector(".block2");
var layer = document.querySelector(".layer");

var body = document.querySelector("body");

  btn1.addEventListener('click', function(){
    block1.classList.add('open');
    layer.classList.add("l-open");
  })
  btn2.addEventListener('click', function(){
    block2.classList.add('open');
    layer.classList.add("l-open");
  })

  closeBtn1.addEventListener('click', function(){
    block1.classList.remove('open');
    layer.classList.remove("l-open");
  })
  closeBtn2.addEventListener('click', function(){
    block2.classList.remove('open');
    layer.classList.remove("l-open");
  })


  layer.addEventListener('click', function(e){
      
    block1.classList.remove('open');
    block2.classList.remove('open');
    layer.classList.remove("l-open");
  })

// jQuery(function($){
//   $("#mainform__select2").chosen({
    
//   });

//})

