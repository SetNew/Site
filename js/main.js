$(document).ready(function(){
    
	var altura = $(window).height();
	var largura = $(window).width();

    $(".button-collapse").sideNav();

     $('.carousel.carousel-slider').carousel({full_width: true});


      $('div.bgParallax').each(function(){
	var $obj = $(this);
 
	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
 
		var bgpos = '50% '+ yPos + 'px';
 
		$obj.css('background-position', bgpos );
 
	}); 
});

      if (largura < 993) {
      	$("#home").height(altura);
      }else{
      	$("#home, #servicos, #equipe, #contato").height(altura);
      }
   
  })
