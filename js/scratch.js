$(document).ready(function(){

	var startBiker = function() {
		var viewPortHeight = $(document).height();
		var viewPortWidth = $(window).width();

		var landingVerticalPosition = viewPortHeight - 200;
		var newTopPosition = '+=' + landingVerticalPosition + 'px';

		var landingHorizontalPosition = viewPortWidth;
		var newLeftPosition = '+=' + landingHorizontalPosition + 'px';

		var biker = $('#biker');
		TweenLite.to(biker, 3, {css:{top:newTopPosition, left:newLeftPosition}});

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

	var moveBikerFirstPhase = function(){
		var biker = $('#biker');

		TweenLite.to(biker, 2.5, {css:{left:"-=300px"}, ease:Power3.easeInOut});
	};

    var moveBikerSecondPhase = function(){
        var biker = $('#biker');
        TweenLite.to(biker, 2.5, {css:{left:"+=600px", opacity: 0}, ease:Power3.easeInOut, onComplete:openModal});

        function openModal(){
            var modal = $('#second');
            var height = $(document).height();
            TweenLite.to(modal, 2.5, {css:{display: "block", opacity: '0.9',height: height}, ease:Expo.easeOut});
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

    var first = $('#first');

	var showFirstSection = TweenLite.to(first, 1.5, {css:{display: "block", opacity: '0.8', left: '100px', width: '500px'}, ease:Expo.easeOut});

    showFirstSection.pause();


	startBiker();
	landBiker();
	moveBackground();


    $('#continue1').on('click', function(){
		var introduction = $('#introduction p');
        explodeIntro(introduction);
        $('#introduction a').hide();
        moveBackground();
        showFirstSection.resume();
        moveBikerFirstPhase();
    });

    $('#continue2').on('click', function(){
        showFirstSection.reverse();
        moveBikerSecondPhase();
    });

});


var incrementCounter = function(){

    var x = 0;

    setInterval(function(){
        var clouds = $('#clouds');
		TweenLite.to(clouds, 1.5, {css:{backgroundPosition: '-=1px top', ease:Power0.easeIn}});
    },  500);
};

incrementCounter();
