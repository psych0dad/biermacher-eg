$(function () {

	$('.coinslideblock').hide();
	
});


$(window).bind("load", function() {
	$('#coin-slider').css('background', '#111');
	$('.coinslideblock:hidden').fadeIn(800);
	
	$('#coin-slider').coinslider({ 
		width: 988, // width of slider panel
		height: 446, // height of slider panel
		spw: 7, // squares per width
		sph: 5, // squares per height
		delay: 3000, // delay between images in ms
		sDelay: 30, // delay beetwen squares in ms
		opacity: 0.7, // opacity of title and navigation
		titleSpeed: 500, // speed of title appereance in ms
		effect: '', // random, swirl, rain, straight
		navigation: true, // prev next and buttons
		//links : true, // show images as links 
		hoverPause: true // pause on hover
	});

});




