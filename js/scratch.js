$(document).ready(function(){

	var parallax = function(){

		$('#p-background').hover(function() {
			var that = this;

			var pageY = $(window).height();
			var pageX = $(window).width();

			console.log(pageX);
			console.log(pageY);


			return that;
		});

	};


	var animateTween = function() {
		var element = $('#biker');
		TweenLite.to(element, 1, {css:{top:"+=200px", left:"+=600px"}});
	};

	animateTween();



});


