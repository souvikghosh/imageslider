sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$("#slider > img#1").fadeIn(300);
	startSlider();
});

function startSlider(){
	count = $("#slider > img").size();
	
	loop = setInterval(function(){
		if(sliderNext > count){
			sliderInt = 1;
			sliderNext = 1;
			
		}
		
		$("#slider > img").fadeOut(300);
		$("#slider > img#" + sliderNext).fadeIn(300);
		
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
	},3000);
	
}

function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop(){
	
	window.clearIinterval(loop);
}

function showSlide(Id){
	stopLoop();
	if(Id > count){
			Id = 1;
			
		}else if(Id < 1){
			
			Id = count;
		}
		
		$("#slider > img").fadeOut(300);
		$("#slider > img#" + Id).fadeIn(300);
		
		sliderInt = Id;
		sliderNext = Id + 1;
		startSlider();
	
}