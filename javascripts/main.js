// JavaScript Document

$(document).ready(function(){
  var windowWidth = $(window).width();
  bannerImageAnimation();
  dropDown();
  bannerDotsListeners();
  shrinkNav();

});

function shrinkNav(){
  var scollTop;
  $(window).scroll(function(){
    scrollTop = $(document).scrollTop;
    windowWidth = $(window).width();
    $('.bannerImage').css('margin-top',scrollTop/1.7)
  });
}

function bannerImageAnimation(){
  $("#bannerImage1").delay(2500).fadeOut(1000, step1);


  function step1(){
    imageNo = 2;
    newsPage = 1;
    $("#dot1 img").attr('src','images/white_dot.png');
    $("#dot2 img").attr('src','images/black_dot.png');
    $("#dot3 img").attr('src','images/white_dot.png');
    $("#bannerImage2").delay(2500).fadeOut(1000, step2);
    $("#bannerImage1").fadeIn(1);
    $("#bannerImage1").css("z-index",1);
    $("#bannerImage2").css("z-index",3);
    $("#bannerImage3").css("z-index",2);
   } 
  function step2(){
    imageNo = 0;
    newsPage = 2;
    $('#dot1 img').attr("src","images/white_dot.png");
    $('#dot2 img').attr("src","images/white_dot.png");
    $('#dot3 img').attr("src","images/black_dot.png");
    $('#bannerImage3').delay(2500).fadeOut(1000, step3);
    $('#bannerImage2').fadeIn(1);
    $('#bannerImage1').css("z-index", 2);
    $('#bannerImage2').css("z-index", 1);
    $('#bannerImage3').css("z-index", 3); 
  }
  function step3(){
    imageNo = 1;
    newsPage = 0;
    $('#dot1 img').attr("src","images/black_dot.png");
    $('#dot2 img').attr("src","images/white_dot.png");
    $('#dot3 img').attr("src","images/white_dot.png");
    $('#bannerImage1').delay(2500).fadeOut(1000, step1);
    $('#bannerImage3').fadeIn(1);
    $('#bannerImage1').css("z-index", 3);
    $('#bannerImage2').css("z-index", 2);
    $('#bannerImage3').css("z-index", 1); 
  }  
}

function bannerDotsListeners(){
  $('#dot1').click(function(){
    $("#bannerImage1").css("z-index", 3);
    $("#bannerImage2").css("z-index", 2);
    $("#bannerImage3").css("z-index", 1);
    $("#dot1 img").attr('src','images/black_dot.png');
    $("#dot2 img").attr('src','images/white_dot.png');
    $("#dot3 img").attr('src','images/white_dot.png');
  });
  $('#dot2').click(function(){
    $("#bannerImage1").css("z-index", 1);
    $("#bannerImage2").css("z-index", 3);
    $("#bannerImage3").css("z-index", 2);
    $("#dot1 img").attr('src','images/white_dot.png');
    $("#dot2 img").attr('src','images/black_dot.png');
    $("#dot3 img").attr('src','images/white_dot.png');
  });
  $('#dot3').click(function(){
    $("#bannerImage1").css("z-index", 2);
    $("#bannerImage2").css("z-index", 1);
    $("#bannerImage3").css("z-index", 3);
    $("#dot1 img").attr('src','images/white_dot.png');
    $("#dot2 img").attr('src','images/white_dot.png');
    $("#dot3 img").attr('src','images/black_dot.png');
  });
}

function dropDown(){
  $('#mobileIcon').click(function(){
    $("#mobileNav li ul").toggle();
  });
}