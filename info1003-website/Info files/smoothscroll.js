//for smooth scroll

(function ($) {
  $(document).ready(function(){
	  
//scroll down
      
		$('a').click(function(){
   			$('html, body').animate({
        		scrollTop: $( $(this).attr('href') ).offset().top
    		}, 600);
    	return false;
	});
  });
}(jQuery));

