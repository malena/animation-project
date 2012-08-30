$(document).ready(function(){

     var target = jQuery("#target");

      target
      .children('img')
      .parallax(
          { mouseport: target },
          { xparallax: 0.2, yparallax: 0.2 },     // Blue layer options
          { xparallax: 0.6, yparallax: 0.6 },     // Green layer options
          {}                                      // Red layer options
      );

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

    getBikePartList();

    //   Bikeapp.fadeIn();

    Bikeapp.dropDownTween();

});
