$(function(){


// Selectors
// =============================================================================

    var container   = $('#container');
    var clouds      = $('#clouds');
    var cyclist     = $('#cyclist');
    var intro       = $('.introduction');
    var phase1      = $('#phase1');
    var phase2      = $('#phase2');
    var phase3      = $('#phase3');
    var click1      = $('#continue1');
    var click2      = $('#continue2');
    var display     = $('.display');
    var display_img = $('.display-image');

    var close_button= $('.close-button');
    var parts_list  = $('.bike-parts');
    var parts_button= $('.bike-parts li');
    var parts_display=$('.bike-part-display');
    var part        = $('.part');
    var seat        = $('#seat');
    var frame       = $('#frame');
    var wheel       = $('#wheel');
    var brakes      = $('#brakes');
    var pedals      = $('#pedals');
    var crank       = $('#crank');
    var sprocket    = $('#sprocket');
    var chain       = $('#chain');
    var stem        = $('#stem');
    var fork        = $('#fork');

// Layout Variables
// =============================================================================

    var vp_height   = $(document).height();
    var vp_width    = $(window).width();

    var cyclist_landing_position    = vp_height - 200;
    var cyclist_new_top_position    = '+=' + cyclist_landing_position + 'px';
    var cyclist_new_left_position   = '+=' + vp_width + 'px';


// Local Functions
// =============================================================================

    var moveForward = function(element){
        TweenLite.to(element, 6, {css:{backgroundPosition:"-=800px bottom"}, ease:Strong.easeOut});
    };

    var moveBackwards = function(){
        console.log('moving backwards');
    };

    var explodeText = function(letters){
        var text = letters;

        text.html(text.text().replace(/([\S])/g, "<span>$1</span>"));
        text.css("position", "relative");

        $("span").each(function(i) {

            var new_top = Math.floor(Math.random()*500)*((i%2)?1:-1);
            var new_left = Math.floor(Math.random()*500)*((i%2)?1:-1);

            $(this).css({position: "relative", opacity: 1, fontSize: 60, top: 0, left: 0});
            TweenLite.to(this, 1, {css:{opacity:"0", fontSize:"84", top: new_top, left: new_left}, onComplete:hide});

            function hide(){
               letters.hide();
            }
        });
    };

    var partsClickEvent = function(element, part){
        element.on('click', function(){
            console.log('just clicked on:' + part);
            showPartsDisplay.play();
            $(".part").hide();
            $(".part." + part).show();
        });
     };

    var showPartsDisplay = new TimelineLite();

    showPartsDisplay.to(phase3, 1, {css:{display: "block", height: vp_height, width: vp_width}});
    showPartsDisplay.to(display_img, 1, {css:{rotation: 360, width:"400px", opacity:"0"}});
    showPartsDisplay.to(parts_list, 1, {css:{left:"1800px", opacity:"0"}, ease:Power2.easeIneaseOut});
    showPartsDisplay.to(parts_display, 1, {css:{display:"block", opacity:"1"}});
    showPartsDisplay.from(parts_display, 1, {css:{top:"-500px"}, ease:Elastic.easeOut});

    showPartsDisplay.pause();

    var closeModal = function(){
        console.log('close modal');
        showPartsDisplay.reverse();
    };

    var animateCyclistIntro = function(){

        TweenLite.to(cyclist, 3, {css:{top:cyclist_new_top_position, left:cyclist_new_left_position}});
        TweenLite.to(cyclist, 2, {css:{rotation:"-=.5rad"}, ease:Power0.easeIn, onComplete:nudgeBike});

        function nudgeBike(){
            TweenLite.to(cyclist, 1, {css:{top:"+=100px", shortRotation:"+=30"}, ease:Power1.easeIn, onComplete:moveBikeOffScreen});
        }

        function moveBikeOffScreen(){
            TweenLite.to(cyclist, 2.5, {css:{left:"+=300px"}, ease:Power3.easeOut});
            TweenLite.to(intro, 2.5, {css:{display: "block", opacity: '1'}});
        }
    };


    var animateClouds = function(){
        var x = 0;
        setInterval(function(){
            TweenLite.to(clouds, 1.5, {css:{backgroundPosition: '-=1px top', ease:Power0.easeIn}});
        },  500);
    };

    var animateCyclistIn = function(){
        TweenLite.to(cyclist, 2.5, {css:{left:"-=300px"}, ease:Power3.easeInOut});
    };

    var clearScreen = function(){
        var clear = new TimelineLite();
        clear.to(cyclist, 2.5, {css:{left:"+=600px", opacity: 0}, ease:Power3.easeInOut});
    };

    var slideModalDown = TweenLite.to(phase2, 2.5, {css:{display: "block", opacity: '0.9',height: vp_height, width: vp_width}, ease:Expo.easeOut, onComplete:openDisplay});
    var slideInLeft = TweenLite.to(phase1, 1.5, {css:{display: "block", opacity: '0.8', left: '100px'}, ease:Expo.easeOut});

    slideInLeft.pause();
    slideModalDown.pause();

    function openDisplay(){
        TweenLite.to(display, 2.5, {css:{display: "block", opacity: '0.9'}, ease:Expo.easeOut});
    }


// Animation Phases
// ============================================================================

    var animationPhases = {
        'phase1' : {
            'continue_button': function clickEvent(){
                click1.on('click', function(){
                    explodeText(intro);
                    moveForward(container);
                    slideInLeft.resume();
                    animateCyclistIn();
                });
            }
        },
        'phase2' : {
            'continue_button': function clickEvent(){
                click2.on('click', function(){
                    clearScreen();
                    slideInLeft.reverse();
                    slideModalDown.resume();
                });
            }
        },
        'phase3' : {
            'close_button': function clickEvent(){
                close_button.on('click', function(){
                    closeModal();
                });
            },
            'seat_button': function clickEvent(){
                partsClickEvent(seat, 'seat');
            },
            'frame_button': function clickevent(){
                partsClickEvent(frame, 'frame');
            },
            'wheel_button': function clickEvent(){
                partsClickEvent(wheel, 'wheel');
            },
            'brakes_button': function clickEvent(){
                partsClickEvent(brakes, 'brakes');
            },
            'pedals_button': function clickEvent(){
                partsClickEvent(pedals, 'pedals');
            }
        }
    };


// Initialization
// ============================================================================

    animateClouds();
    animateCyclistIntro();

    animationPhases.phase1.continue_button();
    animationPhases.phase2.continue_button();

    animationPhases.phase3.close_button();
    animationPhases.phase3.seat_button();
    animationPhases.phase3.frame_button();
    animationPhases.phase3.wheel_button();
    animationPhases.phase3.brakes_button();
    animationPhases.phase3.pedals_button();

});
