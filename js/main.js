var options = {
	offset: 600
}

var	nav = new Headhesive('.nav', options)

// 

$(document).ready(function() {

	 $(".menu-icon, .menu li a").click(function () {
      $(".menu").slideToggle(500);
    });
	 $(window).resize(function() {
	 	if ($(window).width() > 720) {
	 		$('.menu ').removeAttr('style')
	 	}
	 });

});
 
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
        slidesToScroll: 1
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
