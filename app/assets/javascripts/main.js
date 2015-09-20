//scroll function
var scrollToAnchor = function( id ) {
	var elem = $("div[id='"+ id +"']");
	$('html, body').animate({
	        scrollTop: elem.offset().top
	}, 400 );
}

$(document).ready(function() {

	$('.title').fadeIn(1500);

	$('.upper_right_icon').on('click', function(event){
		$('.menu').fadeIn("slow");
	});

	$('span').on('click', function(event) {
		$('.menu').hide();
	});

	$("a").click(function( event ) {
	  if ( $(this).attr("href").match("#") ) {
	    event.preventDefault();
	    var href = $(this).attr('href').replace('#', '');
	    scrollToAnchor(href);
	  }
	});
})