// determine whether or not mobile device
var is_mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var is_mobile = true;
	$('.left_arrow').show();
	$('.right_arrow').show();
}

//scroll function
var scrollToAnchor = function( id ) {
	var elem = $("div[id='"+ id +"']");
	$('html, body').animate({
	        scrollTop: elem.offset().top
	}, 400 );
}

$(document).ready(function() {
	// check if device is iphone
	var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");

	$('.title').fadeIn(2500);

	$('.description_container').fadeIn(2500);

	$('.mujo_description').fadeIn(2500);

	$('.down_arrow').fadeIn(2500);

	// set height of shop images
	if(isiPhone > -1) {
		var height = $(window).height() - 70 + 180
	} else {
		var height = $(window).height() - 70
	}
	$("div.active").css('height', height+'px');

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
		if (!is_mobile) {
			$('.right_arrow').fadeOut(200);
		};
	});

	$('.middle_left_area').hover(function() {
		$('.left_arrow').fadeIn(200);
	});

	$('.middle_left_area').mouseout(function() {
		if (!is_mobile) {
			$('.left_arrow').fadeOut(200);
		};
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
			$('li.active').removeClass('active');
			$('li[data=shop_' + shop_pic_number + ']').addClass('active');
		} else {
			shop_pic_number = 1;
			$('div.active').removeClass('active');
			// $('div.shop_' + shop_pic_number).addClass('active');
			$('.color_way').addClass('active');
			$('li.active').removeClass('active');
			$('li[data=shop_' + shop_pic_number + ']').addClass('active');
		};
		$("div.active").css('height', height+'px');
	});

	$('.middle_left_area').click(function(e) {
		if (shop_pic_number > 1) {
			shop_pic_number -= 1;
			$('div.active').removeClass('active');
			if (shop_pic_number == 1) {
				$('.color_way').addClass('active');
			} else {
				$('div.shop_' + shop_pic_number).addClass('active');
			};
			$('li.active').removeClass('active');
			$('li[data=shop_' + shop_pic_number + ']').addClass('active');
		} else {
			shop_pic_number = 4;
			$('div.active').removeClass('active');
			$('div.shop_' + shop_pic_number).addClass('active');
			$('li.active').removeClass('active');
			$('li[data=shop_' + shop_pic_number + ']').addClass('active');
		};
		$("div.active").css('height', height+'px');
	});

	//product specs pop up
	$('.product_specs').click(function(e) {
		$('.size_chart_pop').hide();
		$('.product_specs_pop').show();
	});
	$('.product_specs_x').click(function() {$('.product_specs_pop').hide()});

	//size chart pop up
	$('.size_chart').click(function(e) {
		$('.product_specs_pop').hide();
		$('.size_chart_pop').show();
	});
	$('.size_chart_x').click(function() {$('.size_chart_pop').hide()});

	//checkout features
	if ($('.checkout_count').text() == '0') {
		$('.checkout_count').hide();
		$('.checkout_tag').hide();
	}

	//shipment form checkbox
	$("input[type='checkbox']").change(function(){
	    if($(this).is(":checked")){
	        $('.shipping_name input:text').val($('.billing_name input').val());
	        $('.shipping_email input:text').val($('.billing_email input').val());
	        $('.shipping_telephone input:text').val($('.billing_telephone input').val());
	        $('.shipping_address_1 input:text').val($('.billing_address_1 input').val());
	        $('.shipping_address_2 input:text').val($('.billing_address_2 input').val());
	        $('.shipping_zip_code input:text').val($('.billing_zip_code input').val());
	        $('.shipping_city input:text').val($('.billing_city input').val());
	        $('.shipping_state input:text').val($('.billing_state input').val());
	        // $('.shipping_country input:text').val($('.billing_country input').val());
	        $('select[name="shipping_country"] option:selected').text($('select[name="billing_country"] option:selected').text())
	        $('select[name="shipping_country"] option:selected').val($('select[name="billing_country"] option:selected').val())
	    }else{
	        $('.shipping_name input:text').val("");
	        $('.shipping_email input:text').val("");
	        $('.shipping_telephone input:text').val("");
	        $('.shipping_address_1 input:text').val("");
	        $('.shipping_address_2 input:text').val("");
	        $('.shipping_zip_code input:text').val("");
	        $('.shipping_city input:text').val("");
	        $('.shipping_state input:text').val("");
	        $('select[name="billing_country"] option:selected').text("United States");
	        $('select[name="billing_country"] option:selected').val("US");
	    }
	});

	//shipment error message
	$('.shipment_btn').on('click', function(event){
	    event.preventDefault();
	    $('.shipment_btn').attr("disabled", true);
	    var $target = $('form#shipment-form');
	    $.ajax({
	      url: '/shipment',
	      type: 'post',
	      data: $target.serialize(),
	      success: function(response) {
	      	if (response.error != null) {
	      		$('.shipment-errors').text(response.error);
	      		$('.shipment_btn').removeAttr("disabled");
	      	} else {
	      		window.location.replace(window.location.origin + '/checkout');
	      	}
	      }
	    });
	  });

	//display different intial shop image depending on which shop button is clicked
	$('.shop_now').on('click', function() {
		$('.middle-page-wrap').show();
		$('.bw_photo').addClass('color_way active');
		$('.red_photo').removeClass('color_way active');
	});
	$('.shop_red').on('click', function() {
		$('.middle-page-wrap').show();
		$('.red_photo').addClass('color_way active');
		$('.bw_photo').removeClass('color_way active');
	});

	//update cart count
	$('.add_to_cart').on('click', function(event){
	    event.preventDefault();
	    var $target = $('form');
	    $.ajax({
	      url: '/cart',
	      type: 'post',
	      data: $target.serialize(),
	      success: function(response) {
	      	$('.cart_error').text(response.error);
	      	console.log(response.amount);
	      	if (response.amount > 0) {
	      		$('.checkout_count').text(response.amount);
	      		$('.checkout_count').show();
	      		$('.checkout_tag').show();
	      	}
	      }
	    });
	  });

})