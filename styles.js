$(document).ready(function(){

	$('.button').on('click', function() {

		if($(this).prev().prev().val() === ""){
			var err = Math.random();
		
			if(err >= 0 && err < 0.1){
				$(this).parent().parent().find('.error').html("I CANNOT READ YOUR MIND. PLEASE ENTER A QUESTION");
			}else if(err > 0.1 && err < 0.2){
				$(this).parent().parent().find('.error').html("DID YOU FORGET TO DO SOMETHING?");		
			}else if(err > 0.2 && err < 0.3){
				$(this).parent().parent().find('.error').html("DO YOU NOT UNDERSTAND HOW THIS WORKS?");		
			}else if(err > 0.3 && err < 0.4){
				$(this).parent().parent().find('.error').html("SHOULD I ASK A QUESTION FOR YOU?");		
			}else if(err > 0.4 && err < 0.5){
				$(this).parent().parent().find('.error').html("ARE YOU CONFUSED?");		
			}else if(err > 0.5 && err < 0.6){
				$(this).parent().parent().find('.error').html('IM GETTING A HEADACHE');		
			}else if(err > 0.6 && err < 0.7){
				$(this).parent().parent().find('.error').html('THIS IS GOING TO BE A LONG DAY');		
			}else if(err > 0.7 && err < 0.8){
				$(this).parent().parent().find('.error').html('IS TIME TO GO HOME YET?');		
			}else{
				$(this).parent().parent().find('.error').html('HMMMM...');		
			}

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
			}else{
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