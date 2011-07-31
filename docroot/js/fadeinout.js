// JavaScript Document for Fade in Out effect

$(document).ready(function () {

if ($.browser.msie && $.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.

// Main Page Hover Tiltes to effect the Images on top too.
$(function(){
	
	$('.featbox1').hover(function() {
		$(".hovericon1").stop().animate({top:'-5px'},200);
	},function(){
		$(".hovericon1").stop().animate({top:0},200);	
	});
	
	$('.featbox2').hover(function() {
		$(".hovericon2").stop().animate({top:'-5px'},200);
	},function(){
		$(".hovericon2").stop().animate({top:0},200);	
	});
	
	$('.featbox3').hover(function() {
		$(".hovericon3").stop().animate({top:'-5px'},200);
	},function(){
		$(".hovericon3").stop().animate({top:0},200);	
	});
	
});


  $(".fade").fadeTo(1, 1);
  $(".fade").hover(
    function () {
      $(this).stop().fadeTo("fast", 0.6);
    },
    function () {
      $(this).stop().fadeTo("fast", 1);
    }
  );
  
  $(".fadebutton").stop().fadeTo("fast", 1);
  $(".fadebutton").hover(
    function () {
      $(this).stop().fadeTo("fast", 0.8);
    },
    function () {
      $(this).stop().fadeTo("fast", 1);
    }
  );
  
  $(".overlay").fadeTo(1, 0.5);

  $(".captionfade").fadeTo(1, 0.8);
  $(".captionfade").hover(
    function () {
      $(this).fadeTo("fast", 0.9);
    },
    function () {
      $(this).fadeTo("slow", 0.8);
    }
  );
  
  $(".invfade").fadeTo(1, 0.5);
  $(".invfade").hover(
    function () {
      $(this).fadeTo("fast", 1);
    },
    function () {
      $(this).fadeTo("slow", 0.5);
    }
  );
  
  $(".photofade").fadeTo(1, 1);
  $(".photofade").hover(
    function () {
      $(this).fadeTo("fast", 0.88);
    },
    function () {
      $(this).fadeTo("fast", 1);
    }
  );
  
});
