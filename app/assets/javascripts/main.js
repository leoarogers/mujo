//scroll function
var scrollToAnchor = function( id ) {
	var elem = $("div[id='"+ id +"']");
	$('html, body').animate({
	        scrollTop: elem.offset().top
	}, 400 );
}

$(document).ready(function() {

	$('.title').fadeIn(2500);

	$("a").click(function( event ) {
	  if ( $(this).attr("href").match("#") ) {
	    event.preventDefault();
	    var href = $(this).attr('href').replace('#', '');
	    scrollToAnchor(href);
	  }
	});

	var pic_number = 1;

	$('.gallery_pic').click(function(e) {
		if (e.target !== this) return;
		if (pic_number < 7) {
			pic_number += 1;
			$(this).css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		} else {
			pic_number = 1;
			$(this).css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		};
	});

	$('.gl_right_arrow').click(function(e) {
		if (pic_number < 7) {
			pic_number += 1;
			$('.gallery_pic').css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		} else {
			pic_number = 1;
			$('.gallery_pic').css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		};
	});

	$('.gl_left_arrow').click(function(e) {
		if (pic_number > 1) {
			pic_number -= 1;
			$('.gallery_pic').css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		} else {
			pic_number = 7;
			$('.gallery_pic').css('background-image', 'url(images/gallery/' + pic_number + '.jpg)');
		};
	});

	var lookbook_pic_number = 100;

	$('.lookbook_pic').click(function(e) {
		if (e.target !== this) return;
		if (lookbook_pic_number < 104) {
			lookbook_pic_number += 1;
			$(this).css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		} else {
			lookbook_pic_number = 100;
			$(this).css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		};
	});

	$('.lb_right_arrow').click(function(e) {
		if (lookbook_pic_number < 104) {
			lookbook_pic_number += 1;
			$('.lookbook_pic').css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		} else {
			lookbook_pic_number = 100;
			$('.lookbook_pic').css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		};
	});

	$('.lb_left_arrow').click(function(e) {
		if (lookbook_pic_number > 100) {
			lookbook_pic_number -= 1;
			$('.lookbook_pic').css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		} else {
			lookbook_pic_number = 104;
			$('.lookbook_pic').css('background-image', 'url(images/lookbook/' + lookbook_pic_number + '.jpg)');
		};
	});


})