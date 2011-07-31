$(function () {
	$('.preloader').hide();//hide all the images on the page
});

var i = 0;//initialize
var int=0;//Internet Explorer Fix
$(window).bind("load", function() {//The load event will only fire if the entire page or document is fully loaded
	var int = setInterval("doThis(i)",500);//500 is the fade in speed in milliseconds
});

function doThis() {
	var images = $('.preloader').length;//count the number of images on the page
	if (i >= images) {// Loop the images
		clearInterval(int);//When it reaches the last image the loop ends
		$('.loader').css('background', 'none');
	}
	$('.preloader:hidden').eq(0).fadeIn(500);//fades in the hidden images one by one
	i++;//add 1 to the count
}
