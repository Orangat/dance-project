var options = {
	offset: 800
}

var	nav = new Headhesive('.nav', options)

// 


 

// 
  // $('.sl').slick({  /*указать класс собщим селектором слайдера*/
  // 	 infinite: true,
  // 	 slidesToShow: 3,
  // 	 slidesToScroll: 3
  // }); 


// 

$(document).ready(function(){
  $('.sl').slick({
   	
   	infinite: true,
   	dots: true,
   	arrows: true,
   	centerMode: true,
 		slidesToShow: 5,
 		centerPadding: '60px',
 		autoplay: true,
    autoplaySpeed: 3000,

     responsive: [
    {
      breakpoint: 1044,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '25px'
      }
    }
  
  ]
 
  	});
  });


$(document).ready(function(){
   $('.sl_two').slick({
   	infinite: true,
   	dots: true,
 		autoplay: true,
    autoplaySpeed: 3000,
  });
 });





  $(".text-trigger").click(function () {
      $(".some-div").slideToggle(400);
    });

  $(".text-trigger2").click(function () {
      $(".some-div2").slideToggle(400);
    });

  $(".text-trigger3").click(function () {
      $(".some-div3").slideToggle(400);
    });

  $(".text-trigger4").click(function () {
      $(".some-div4").slideToggle(400);
    });

  $(".text-trigger5").click(function () {
      $(".some-div5").slideToggle(400);
    });
// 
//     $("nav ul li").click(function () {
//       $("nav ul").slideToggle(400);
//     });
// // 
   

// 

$(document).ready(function() {

  


  $('.menu-icon').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 760 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize
});//end ready


