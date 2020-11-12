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

 	//animation
 	var typed = new Typed(".typing-1" ,{
 		strings: ["Devoloper" , "Designer" , "Freelancer" , "Photographer"],
 		typeSpeed : 100,
 		backSpeed : 60,
 		loop : true
 	});

 	var typed1 = new Typed(".typing-2" ,{
 		strings: ["Devoloper" , "Designer" , "Freelancer" , "Photographer"],
 		typeSpeed : 100,
 		backSpeed : 60,
 		loop : true
 	});



 });

 function showMore(){
 	var dots = document.getElementById('dots');
 	var moreText = document.getElementById("more");
 	var aText = document.getElementById("showmore");

 	if(dots.style.display === "none"){
 		dots.style.display = "inline";
 		showmore.innerHTML = "Read More";
 		moreText.style.display = "none";

 	}
 	else {
    	dots.style.display = "none";
    	showmore.innerHTML = "Read less"; 
    	moreText.style.display = "inline";
    }
 }