$(document).ready(function(){

	var parallax = function(){
		
		$('#p-background').hover(function() {
			var that = this;

			var pageY = $(window).height();
			var pageX = $(window).width();

			console.log(pageX);
			console.log(pageY);

			animateTween(that);

			return that;
		});

	};


	var animateTween = function() {
		var element = $('#biker'); 
		TweenLite.to(element, 1, {css:{top:"+=20px", left:"+=100px"}, repeat:3, repeatDelay:0.5});
	};


	parallax();

});


