/**
 * author Malena Andrade
 * url http://www.mandrade.com
 */


var barrelSpeed = 0.4;
var storySpeed;

var $window = $(window);

var $container;
var $landscape;
var $story;

var barrelsHeight;
var storyHeight;
var homeHeight;

function setStorySpeed(){
    var storyDisplacement = storyHeight - $window.height() + homeHeight;
    var barrelsDisplacement = barrelsHeight - $window.height();

    // Barrel Movement --> 1 : 1 + barrelSpeed
    // Story Movement --> 1 : 1 + barrelSpeed + storySpeed

    storySpeed = ((storyDisplacement / barrelsDisplacement) * (1 + barrelSpeed)) - 1 - barrelSpeed;
    storySpeed = storySpeed * 1.15;
}

function resizeContainer() {
    var originalDisplacement = barrelsHeight - $window.height();
    var displacement = originalDisplacement / (1 + barrelSpeed);
    var containerHeight = $window.height() + displacement;

    $container.css("height", containerHeight + "px");
}

function parallax() {
    var scrollTop = $window.scrollTop();

    //barrels top position is moving up
    $barrels.css("top", "-" + (scrollTop * barrelSpeed) + "px");

    // story top position is moving up
    $story.css("top", "-" + (scrollTop * storySpeed) + "px");

    adjustClock();
}

$window.resize(function() {
    resizeContainer();
    setStorySpeed();
    parallax();
});

$window.scroll(parallax);

$(document).ready(function() {
    $container = $("#container");
    $landscape = $("#landscape");
    $story = $("#story");

    barrelsHeight = $barrels.height();
    storyHeight = $story.height();
    homeHeight = $("#home").height();

    resizeContainer();
    setStorySpeed();

});

