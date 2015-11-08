//scroll function
var scrollToAnchor = function( id ) {
	var elem = $("div[id='"+ id +"']");
	$('html, body').animate({
	        scrollTop: elem.offset().top
	}, 400 );
}

$(document).ready(function() {

	$('.title').fadeIn(2500);

	$('.description_container').fadeIn(2500);

	$('.mujo_description').fadeIn(2500);

	$('.down_arrow').fadeIn(2500);

	$("a").click(function( event ) {
	  if ( $(this).attr("href").match("#") ) {
	    event.preventDefault();
	    var href = $(this).attr('href').replace('#', '');
	    scrollToAnchor(href);
	  }
	});

	$('.middle_right_area').hover(function() {
		$('.right_arrow').fadeIn(200);
	});

	$('.middle_right_area').mouseout(function() {
		$('.right_arrow').fadeOut(200);
	});

	$('.middle_left_area').hover(function() {
		$('.left_arrow').fadeIn(200);
	});

	$('.middle_left_area').mouseout(function() {
		$('.left_arrow').fadeOut(200);
	});

	//gallery scroll

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

	//lookbook scroll

	var lookbook_pic_number = 1;

	$('.lookbook_pic').click(function(e) {
		var $target = e.target;
		console.log($target.className);
		if ($target.className == 'lb_right_arrow' || $target.className == 'lb_left_arrow') return;
		if (lookbook_pic_number < 5) {
			lookbook_pic_number += 1;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		} else {
			lookbook_pic_number = 1;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		};
	});

	$('.lb_right_arrow').click(function(e) {
		if (lookbook_pic_number < 5) {
			lookbook_pic_number += 1;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		} else {
			lookbook_pic_number = 1;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		};
	});

	$('.lb_left_arrow').click(function(e) {
		if (lookbook_pic_number > 1) {
			lookbook_pic_number -= 1;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		} else {
			lookbook_pic_number = 5;
			$('div.lb_active').removeClass('lb_active');
			$('div.lookbook_' + lookbook_pic_number).addClass('lb_active');
		};
	});

	//shoppage scroll

	$('.navigation li').click(function(e) {
		var clicked = $(this).attr('data');
		//update button
		$('li.active').removeClass('active');
		$('li[data=' + clicked + ']').addClass('active');
		//update shop image
		$('div.active').removeClass('active');
		$('div.' + clicked).addClass('active');
	})

	var shop_pic_number = 1;

	$('.middle_right_area').click(function(e) {
		if (shop_pic_number < 4) {
			shop_pic_number += 1;
			$('div.active').removeClass('active');
			$('div.shop_' + shop_pic_number).addClass('active');
		} else {
			shop_pic_number = 1;
			$('div.active').removeClass('active');
			$('div.shop_' + shop_pic_number).addClass('active');
		};
	});

	$('.middle_left_area').click(function(e) {
		if (shop_pic_number > 1) {
			shop_pic_number -= 1;
			$('div.active').removeClass('active');
			$('div.shop_' + shop_pic_number).addClass('active');
		} else {
			shop_pic_number = 4;
			$('div.active').removeClass('active');
			$('div.shop_' + shop_pic_number).addClass('active');
		};
	});

})