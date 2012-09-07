$(document).ready(function(){

    jQuery( '.parallax-layer' ).parallax( mouseport );


    // Global Object

    var Bikeapp = {

        defaults    : {
            bikePartTitle   : '.bike-part-title',
            introCircle     : '.introduction'
        },

        bikeList    :   function (bikepart) {
                            console.log(bikepart);
        },

        glow        :   function(){
                        $(this.defaults.bikePartTitle).addClass('glow');
        },

        fadeIn      :   function(){
                        $(this.defaults.bikePartTitle).fadeIn('slow', function(){
                            Bikeapp.glow();
                        });
        },

        fadeInTween :   function(element){
                            var tweenElement = $(this.defaults.introCircle);
                            TweenLite.to(tweenElement, 4, {css:{opacity:0.9, backgroundColor: 'blue'}, ease: Power2.easeOut});
        },

        dropDownTween   :   function(){
                            var tweenElement = $(this.defaults.introCircle);
                            TweenLite.to(tweenElement, 4, {css:{opacity:0.9, backgroundColor: 'blue'}, ease: Power2.easeOut});
        }
    };

    var getBikePartList = function (){
        $('li').each(function() {
            var part = $(this).attr('id');
            Bikeapp.bikeList(part);
        });
    };

  //  getBikePartList();

    //   Bikeapp.fadeIn();

  //  Bikeapp.dropDownTween();

});
