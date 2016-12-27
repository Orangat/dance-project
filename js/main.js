
 
  // $('.sl').slick({  /*указать класс собщим селектором слайдера*/
  // 	 infinite: true,
  // 	 slidesToShow: 3,
  // 	 slidesToScroll: 3
  // }); 

$(document).ready(function(){
  $('.sl').slick({
   	
   	infinite: true,
   	dots: true,
   	centerMode: true,
 	slidesToShow: 5,
 	centerPadding: '60px',
 	
 	autoplay: true,
    autoplaySpeed: 3000,
  });
});