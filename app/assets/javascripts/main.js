// determine whether or not mobile device
var is_mobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var is_mobile = true;
}

$(document).ready(function() {
	// check if device is iphone
	var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");

	$('.title').fadeIn(2500);

	$('.description_container').fadeIn(2500);

	$('.mujo_description').fadeIn(2500);

	$('.dropdown-toggle').dropdown();

	if (window.location.href == "https://www.mujonyc.com/") {
		$('.menu').hide();
	}

	//-------------------------------------
	//SALE MODAL
	//-------------------------------------

	setTimeout(function(){
        if(!Cookies.get('modalShown')) {
        	$("#myModal").modal('show');
         	Cookies.set('modalShown', true);
        }
	},1000);

    //-------------------------------------
    //LOOKBOOK 1 SCROLL
    //-------------------------------------

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

	//-------------------------------------
	//LOOKBOOK 2 SCROLL
	//-------------------------------------

	var lookbook2_pic_number = 1;

	$('.lookbook2_pic').click(function(e) {
		var $target = e.target;
		console.log($target.className);
		if ($target.className == 'lb2_right_arrow' || $target.className == 'lb2_left_arrow') return;
		if (lookbook2_pic_number < 7) {
			lookbook2_pic_number += 1;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		} else {
			lookbook2_pic_number = 1;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		};
	});

	$('.lb2_right_arrow').click(function(e) {
		if (lookbook2_pic_number < 7) {
			lookbook2_pic_number += 1;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		} else {
			lookbook2_pic_number = 1;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		};
	});

	$('.lb2_left_arrow').click(function(e) {
		if (lookbook2_pic_number > 1) {
			lookbook2_pic_number -= 1;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		} else {
			lookbook2_pic_number = 7;
			$('div.lb2_active').removeClass('lb2_active');
			$('div.lookbook_' + lookbook2_pic_number).addClass('lb2_active');
		};
	});

	//-------------------------------------
	//LOOKBOOK 3 SCROLL
	//-------------------------------------

	var lookbook3_pic_number = 1;

	$('.lookbook3_pic').click(function(e) {
		var $target = e.target;
		console.log($target.className);
		if ($target.className == 'lb2_right_arrow' || $target.className == 'lb3_left_arrow') return;
		if (lookbook3_pic_number < 9) {
			lookbook3_pic_number += 1;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		} else {
			lookbook3_pic_number = 1;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		};
	});

	$('.lb3_right_arrow').click(function(e) {
		if (lookbook3_pic_number < 9) {
			lookbook3_pic_number += 1;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		} else {
			lookbook3_pic_number = 1;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		};
	});

	$('.lb3_left_arrow').click(function(e) {
		if (lookbook3_pic_number > 1) {
			lookbook3_pic_number -= 1;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		} else {
			lookbook3_pic_number = 9;
			$('div.lb3_active').removeClass('lb3_active');
			$('div.lookbook_' + lookbook3_pic_number).addClass('lb3_active');
		};
	});

	//-------------------------------------
	//STUDIO SERIES SCROLL
	//-------------------------------------

	var studio_pic_number = 1;

	$('.studio_pic').click(function(e) {
		var $target = e.target;
		if ($target.className == 'studio_right_arrow' || $target.className == 'studio_left_arrow') return;
		if (studio_pic_number < 6) {
			studio_pic_number += 1;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		} else {
			studio_pic_number = 1;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		};
	});

	$('.studio_right_arrow').click(function(e) {
		if (studio_pic_number < 6) {
			studio_pic_number += 1;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		} else {
			studio_pic_number = 1;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		};
	});

	$('.studio_left_arrow').click(function(e) {
		if (studio_pic_number > 1) {
			studio_pic_number -= 1;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		} else {
			studio_pic_number = 6;
			$('div.studio_active').removeClass('studio_active');
			$('div.lookbook_' + studio_pic_number).addClass('studio_active');
		};
	});
})	