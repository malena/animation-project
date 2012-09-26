$(document).ready(function(){

	var startBiker = function() {
		var biker = $('#biker');
		TweenLite.to(biker, 3, {css:{top:"+=400px", left:"+=1200px"}});

	};

	var landBiker = function() {
		var biker = $('#biker');
		var intro = $('#introduction');

		TweenLite.to(biker, 2, {css:{rotation:"-=.5rad"}, ease:Power0.easeIn, onComplete:nudgeBike});

		function nudgeBike(){
			TweenLite.to(biker, 1, {css:{top:"+=100px", shortRotation:"+=30"}, ease:Power1.easeIn, onComplete:moveBikeOffScreen});
		}

		function moveBikeOffScreen(){
			TweenLite.to(biker, 2.5, {css:{left:"+=300px"}, ease:Power3.easeOut});
			TweenLite.to(intro, 2.5, {css:{display: "block", opacity: '1'}});
		}

	};

	var moveBackground = function(){
		var container = $('#container');
		TweenLite.to(container, 6, {css:{backgroundPosition:"-=800px bottom"}, ease:Strong.easeOut});
	};

	var explodeIntro = function(letters){

        var $letters = $(letters);

        $letters.html($letters.text().replace(/([\S])/g, "<span>$1</span>"));
        $letters.css("position", "relative");

        $("span").each(function(i) {

            var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
            var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

            /* Tweenlite */
            $(this).css({position: "relative", opacity: 1, fontSize: 60, top: 0, left: 0});
            TweenLite.to(this, 1, {css:{opacity:"0", fontSize:"84", top: newTop, left: newLeft}});

        });
    };


	startBiker();
	landBiker();
	moveBackground();


    $('#continue1').on('click', function(){
		var introduction = $('#introduction p');
        explodeIntro(introduction);
        moveBackground();
    });

});


