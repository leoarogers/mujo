//scroll function
var scrollToAnchor = function( id ) {
	var elem = $("div[id='"+ id +"']");
	$('html, body').animate({
	        scrollTop: elem.offset().top
	}, 400 );
}

$(document).ready(function() {

	$('.title').fadeIn(2500);

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

	$('.lookbook-page-wrap').click(function(event) {
		target = event.target;
		if ($('.big_pic').has('img').length > 0) {
			$('.big_pic').empty();
			$('.big_pic').hide();
			$('.lookbook_filter').hide();
		} else if (target.classList.contains('thumbnail')) {
			$('img').removeClass('active');
			$("#" + target.id).addClass('active')
			$('.active').clone().appendTo('.big_pic');
			$('.big_pic').show();
			$('.lookbook_filter').show();
		} 
	});

	if ($('.lookbook-page-wrap').length > 0) {
		$('.top_bar').show();
		$('.bottom_bar').show();
	} else {
		$('.top_bar').hide();
		$('.bottom_bar').hide();
	};

	// $('#collection_btn').on('mouseover', function() {
	// 	$('.submenu').show();
	// });
	// $('.complete_menu').on('mouseout', function() {
	// 	$('.submenu').hide();
	// })

})