 $(document).ready(function(){
 	$(window).scroll(function(){
 		if(this.scrollY > 20){
 			$('.navigation-bar').addClass("sticky");
 		}
 		else{
 			$('.navigation-bar').removeClass('sticky');
 		}
 	});

 	$('.menu-btn').click(function(){
 		$('.navigation-bar .items-nav').toggleClass("active");
 		$('.menu-btn i').toggleClass("active");
 	}); 

 });