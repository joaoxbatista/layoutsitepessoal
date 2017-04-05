$(document).ready(function(){

	var ani = " animated";
	var inf = " infinite";
	var ani_p = ani+inf+" flash";
	var ani_h1 = ani+" pulse";
	var ani_box = ani+" fadeIn";
	var ani_mini_box = ani+" bounceIn";

	$('.blink').addClass(ani_p);

	$('h1').hover(
		function(){
			$(this).addClass(ani_h1);
		},
		function(){
			$(this).removeClass(ani_h1);
		}

	);

	var time = 0;

	$('.box').each(
		
		function(i){

			var el = $(this);
			setTimeout(

				function(){
					el.addClass(ani_box);
				}, 
				time

			);

			time += 1000;

		}

	);

	var time2 = 1000;

	$('.mini-box').hide().each(
		function(i){

			var el = $(this);
			setTimeout(

				function(){
					el.show();
					el.addClass(ani_mini_box);
				}, 
				time2

			);

			time2 += 1000;

		}
	);
});
