// initialise plugins
$(document).ready(function(){ 
    $(function(){
        $('ul.sf-menu').superfish();
    });

	$(window).unload(function(){
		$('ul.sf-menu li.current').hideSuperfishUl();	// Close superfish submenu
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});
    
});
