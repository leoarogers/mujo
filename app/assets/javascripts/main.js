// determine whether or not mobile device
var is_mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var is_mobile = true;
}

var LOOKBOOK = [
	{
		'name': 'isan',
		'length': 5,
		'number': 1
	},
	{
		'name': 'core',
		'length': 7,
		'number': 2
	},
	{
		'name': 'annex',
		'length': 9,
		'number': 3
	},
	{
		'name': 'core_supply',
		'length': 16,
		'number': 4
	},
	{
		'name': 'studio',
		'length': 6,
		'number': 5
	}
];

$(document).ready(function() {
	// check if device is iphone
	var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");

	//-------------------------------------
	// Page load stylistic logic
	//-------------------------------------

	$('.title').fadeIn(2500);
	$('.description_container').fadeIn(2500);
	$('.mujo_description').fadeIn(2500);
	$('.dropdown-toggle').dropdown();


	//-------------------------------------
	// Hide top-right nav bar on production
	//-------------------------------------

	if (window.location.href == "https://www.mujonyc.com/") {
		$('.menu').hide();
	}

	//-------------------------------------
	// Lookbook Scroll Logic
	//-------------------------------------

	// LOOKBOOK.forEach((lookbook) => {
	// 	var lookbook_pic_number = 1;

	// 	$(".lookbook" + lookbook.number + "_pic").click(function(e) {
	// 		var $target = e.target;

	// 		if ($target.className == "lb" + lookbook.number + "_right_arrow" || $target.className == "lb" + lookbook.number + "_left_arrow") return;

	// 		if (lookbook_pic_number < lookbook.length) {
	// 			lookbook_pic_number += 1;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		} else {
	// 			lookbook_pic_number = 1;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		};
	// 	});

	// 	$(".lb" + lookbook.number + "_right_arrow").click(function(e) {
	// 		if (lookbook_pic_number < lookbook.length) {
	// 			lookbook_pic_number += 1;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		} else {
	// 			lookbook_pic_number = 1;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		};
	// 	});

	// 	$(".lb" + lookbook.number + "_left_arrow").click(function(e) {
	// 		if (lookbook_pic_number > 1) {
	// 			lookbook_pic_number -= 1;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		} else {
	// 			lookbook_pic_number = lookbook.length;
	// 			$("div.lb" + lookbook.number + "_active").removeClass("lb" + lookbook.number + "_active");
	// 			$("div.lookbook_" + lookbook_pic_number).addClass("lb" + lookbook.number + "_active");
	// 		};
	// 	});
	// })

	//-------------------------------------
	// Lookbook 3
	//-------------------------------------

	var lookbook_pic_number_1 = 1;
	var lookbook_number_1 = 3;
	var lookbook_length_1 = 9;

	$(".lookbook" + lookbook_number_1 + "_pic").click(function(e) {
		var $target = e.target;

		if ($target.className == "lb" + lookbook_number_1 + "_right_arrow" || $target.className == "lb" + lookbook_number_1 + "_left_arrow") return;

		if (lookbook_pic_number_1 < lookbook_length_1) {
			lookbook_pic_number_1 += 1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		} else {
			lookbook_pic_number_1 = 1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		};
	});

	$(".lb" + lookbook_number_1 + "_right_arrow").click(function(e) {
		if (lookbook_pic_number_1 < lookbook_length_1) {
			lookbook_pic_number_1 += 1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		} else {
			lookbook_pic_number_1 = 1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		};
	});

	$(".lb" + lookbook_number_1 + "_left_arrow").click(function(e) {
		if (lookbook_pic_number_1 > 1) {
			lookbook_pic_number_1 -= 1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		} else {
			lookbook_pic_number_1 = lookbook_length_1;
			$("div.lb" + lookbook_number_1 + "_active").removeClass("lb" + lookbook_number_1 + "_active");
			$("div.lookbook_" + lookbook_pic_number_1).addClass("lb" + lookbook_number_1 + "_active");
		};
	});

	//-------------------------------------
	// Lookbook 4
	//-------------------------------------

	var lookbook_pic_number_2 = 1;
	var lookbook_number_2 = 4;
	var lookbook_length_2 = 16;

	$(".lookbook" + lookbook_number_2 + "_pic").click(function(e) {
		var $target = e.target;

		if ($target.className == "lb" + lookbook_number_2 + "_right_arrow" || $target.className == "lb" + lookbook_number_2 + "_left_arrow") return;

		if (lookbook_pic_number_2 < lookbook_length_2) {
			lookbook_pic_number_2 += 1;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		} else {
			lookbook_pic_number_2 = 1;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		};
	});

	$(".lb" + lookbook_number_2 + "_right_arrow").click(function(e) {
		if (lookbook_pic_number_2 < lookbook_length_2) {
			lookbook_pic_number_2 += 1;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		} else {
			lookbook_pic_number_2 = 1;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		};
	});

	$(".lb" + lookbook_number_2 + "_left_arrow").click(function(e) {
		if (lookbook_pic_number_2 > 1) {
			lookbook_pic_number_2 -= 1;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		} else {
			lookbook_pic_number_2 = lookbook_length_2;
			$("div.lb" + lookbook_number_2 + "_active").removeClass("lb" + lookbook_number_2 + "_active");
			$("div.lookbook_" + lookbook_pic_number_2).addClass("lb" + lookbook_number_2 + "_active");
		};
	});

	//-------------------------------------
	// Lookbook 5
	//-------------------------------------

	var lookbook_pic_number_3 = 1;
	var lookbook_number_3 = 5;
	var lookbook_length_3 = 6;

	$(".lookbook" + lookbook_number_3 + "_pic").click(function(e) {
		var $target = e.target;

		if ($target.className == "lb" + lookbook_number_3 + "_right_arrow" || $target.className == "lb" + lookbook_number_3 + "_left_arrow") return;

		if (lookbook_pic_number_3 < lookbook_length_3) {
			lookbook_pic_number_3 += 1;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		} else {
			lookbook_pic_number_3 = 1;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		};
	});

	$(".lb" + lookbook_number_3 + "_right_arrow").click(function(e) {
		if (lookbook_pic_number_3 < lookbook_length_3) {
			lookbook_pic_number_3 += 1;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		} else {
			lookbook_pic_number_3 = 1;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		};
	});

	$(".lb" + lookbook_number_3 + "_left_arrow").click(function(e) {
		if (lookbook_pic_number_3 > 1) {
			lookbook_pic_number_3 -= 1;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		} else {
			lookbook_pic_number_3 = lookbook_length_3;
			$("div.lb" + lookbook_number_3 + "_active").removeClass("lb" + lookbook_number_3 + "_active");
			$("div.lookbook_" + lookbook_pic_number_3).addClass("lb" + lookbook_number_3 + "_active");
		};
	});

	//-------------------------------------
	// Sale Modal - uncomment as needed
	//-------------------------------------

	// setTimeout(function(){
 //        if(!Cookies.get('modalShown')) {
 //        	$("#myModal").modal('show');
 //         	Cookies.set('modalShown', true);
 //        }
	// },1000);
});	