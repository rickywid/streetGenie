$(document).ready(function(){

	$('.button').on('click', function() {

		if($(this).prev().prev().val() === ""){
			$('.error').show();
		}else{

		$('.error').hide();
		$('.content').fadeOut(300);
		$('.thinking').delay(2000).fadeIn();
		$('.thinking').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('.thinking').removeClass('animated fadeIn').hide();
			

			var x = Math.random();
			if(x >= 0 && x < 0.1){
				$(this).before("<h1 class='answer'>NO DOUBT ABOUT IT</h1>");
			}else if(x > 0.1 && x < 0.2){
				$(this).before("<h1 class='answer'>I DON'T ANSWER STUPID QUESTIONS</h1>");		
			}else if(x > 0.2 && x < 0.3){
				$(this).before("<h1 class='answer'>ANYTHING IS POSSIBLE MY FRIEND</h1>");		
			}else if(x > 0.3 && x < 0.4){
				$(this).before("<h1 class='answer'>I'M DRUNK RIGHT NOW. ASK AGAIN TOMORROW</h1>");		
			}else if(x > 0.4 && x < 0.5){
				$(this).before("<h1 class='answer'>I HAVE A HANGOVER. ASK AGAIN LATER ON</h1>");		
			}else if(x > 0.5 && x < 0.6){
				$(this).before('<h1 class="answer">IT SURE SEEMS LIKE IT, DONT YOU THINK?</h1>');		
			}else if(x > 0.6 && x < 0.7){
				$(this).before('<h1 class="answer">DO I REALLY NEED TO ANSWER THAT?</h1>');		
			}else if(x > 0.7 && x < 0.8){
				$(this).before('<h1 class="answer">NEGATIVE</h1>');		
			}else if(x > 0.9 && x < 1){
				$(this).before('<h1 class="answer">YES. I AM 100% SURE</h1>');		
			}
			
			$('.ask-again').delay(2000).fadeIn();

		});

		$('.ask-again').on('click', function(){
			$(this).hide();
			$('.content').show();
			$('input').val("");
			$('.answer').hide();
			$('.question').hide();
		});

		var q = $(this).prev().prev().val();
		$(this).parent().before('<h1 class="question">'+q+'</h1>');
		}
	});
});