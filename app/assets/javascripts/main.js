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
	// Sale Modal - uncomment as needed
	//-------------------------------------

	// setTimeout(function(){
 //        if(!Cookies.get('modalShown')) {
 //        	$("#myModal").modal('show');
 //         	Cookies.set('modalShown', true);
 //        }
	// },1000);
});	