$(function () {

	window.inputNumber = function (el) {

		var min = el.attr('min') || false;
		var max = el.attr('max') || false;

		var els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function () {
			init($(this));
		});

		function init(el) {

			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				var value = el[0].value;
				value--;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var value = el[0].value;
				value++;
				if (!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	}

	inputNumber($('.input-number'));
	/* input counter end */

	//for replaceing path for big img
	$(".small_img").click(function () {
		var src = $(this).find('img').attr('src');
		console.log(src);
		$(".main_img").find('img').attr('src', src);
		console.log(src);
	});

	$(".inner_list_img_wrap").slick({
		// dots: true,
		infinite: true,
		slidesToShow: 4,
		arrows: true,
		nextArrow: '<div class="right_arrow arrow"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="left_arrow arrow"><i class="fas fa-chevron-left"></i></div>',
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					// dots: true,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$(".brand_list").slick({
		// dots: true,
		infinite: true,
		slidesToShow: 6,
		arrows: true,
		nextArrow: '<div class="right_arrow arrow"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="left_arrow arrow"><i class="fas fa-chevron-left"></i></div>',
		slidesToScroll: 6
	});

	// $('items_img').on('click', function(){
	// 	console.log('lol');
	// });

	// $('.items_img').magnificPopup({
	// 	type:'image',
	// 	gallery:{
	// 		enabled: true
	// 	},
	// 	removalDelay: 300,
	// 	mainClass: 'mfp-fade',
	// 	navigateByImgClick: true,
		
	// closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><img src="img/cat_icon/exit_filters.svg" alt="" class="mfp-close"></button>'
	// });

	
	
	/*Slide down*/
	// $(".slider-show").click(function (){
	// 	$(this).closest(".clump").find(".detail").removeClass("closed");
	// });
	// $(".slider-close").click(function (){
	// 	$(this).closest(".clump").find(".detail").addClass("closed");
	// });

	$(".more").click(function () {
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".more").addClass("hide_link");
		$(this).closest(".clump").find(".less").removeClass("hide_link");
	});
	$(".less").click(function () {
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".more").removeClass("hide_link");
		$(this).closest(".clump").find(".less").addClass("hide_link");
	});

	$(".more_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
	});


	$(".header_slide").click(function () {
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").removeClass("hide_link");
	});
	$(".header_slide_inside").click(function () {
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").addClass("hide_link");
	});

	$(".sb_header_slide").click(function () {
		$(this).closest(".clump").find(".sb_detail").removeClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").removeClass("hide_link");
	});
	$(".sb_header_slide_inside").click(function () {
		$(this).closest(".clump").find(".sb_detail").addClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").addClass("hide_link");
	});

	$(".rulet").click(function () {
		$(this).find('.block_info').toggleClass('closed');
	});

	// $('dd').filter(':nth-child(n+4)').hide();
	$('dd').hide();
    
	$('dl').on("click", 'dt', function() {
			$(this)
					.next()
						.slideDown(300)
						.siblings('dd')
							.slideUp(300);
	});    
	$('.close_faq_btn_wrap').on("click", function() {
			$(this).parent().slideUp(300);
	});    

	// $(".faq_header").click(function () {
	// 	$(this).parent().find('.block_info').toggleClass('closed');
	// 	console.log('clicccccc0');
	// });
	
	// var click_fq = true;
	// var faq = true;

	// $(".faq_block").click(function () {
	// 	if(faq == true){
	// 		$(this).find('.block_info').toggleClass('closed');
	// 		$(this).toggleClass('pin');
	// 		$(this).find('.close_faq_btn_wrap').css('pointer-events', 'visible');
	// 		faq = false;
	// 		console.log('faq ='+ faq);

	// 	}else{
	// 		check_faq();
	// 		$(this).find('.block_info').toggleClass('closed');
	// 	}
	// });

	// function check_faq(){
	// 	$('.faq_block').each(function (index, value) {
	// 		var clsd = $(value).find('.testt').length ;
	// 		console.log('clsd = ' + clsd);
			
	// 		if(clsd >0){
	// 			// $(this).css('border', '1px solid red');
	// 			$(value).find('.block_info').toggleClass('closed');
	// 			console.log(index + '+');
	// 		}
	// 	});
	// };
	
	// $(".close_faq_btn_wrap").click(function () {
	// 	$(this).parent().toggleClass('closed');
	// 	console.log();
	// 	// faq = true;
	// });


	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
	});

	$('.cart-wrap').on('click', function () {
		// $('.cart').toggleClass('show_cart');
		$('.cart').fadeIn("slow");
		$('.wrap_cart').fadeIn("slow");

		console.log('click +');
	});
	// $('.tab').on('click', function () {
	// 	var active_tab = $(this);
	// 	$('.tab').each(function (index, value) {
	// 		$(value).toggleClass('active');
	// 		if(value == active_tab){
	// 			// $(".tab-content").toggleClass('hidden');
	// 			console.log('halelua')
	// 		}
	// 	});
	// });

// product tabs

$(".tab-content").hide();
$(".tab-content:first").show();

  
$(".tab").click(function() {

  $(".tab-content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $(".tab").removeClass("active");
  $(this).addClass("active");

});
//end of tabs


	$('.cart').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.cart.wrap_cart').fadeOut("slow");

		console.log('click -- ');
	});
	$('#exit_cart').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.cart.wrap_cart').fadeOut("slow");

		console.log('click - ');
	});
	$('.lets_buy').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.cart.wrap_cart').fadeOut("slow");

		console.log('click - ');
	});

	$('.filter_btn').on('click', function () {
		// $('.s_cont').toggleClass('slide_mobile_filters');
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('.overlay').toggleClass('show');
		// $('.s_cont').toggleClass('visible-md');
		// $('.s_cont').toggleClass('visible-lg');
	});
	$('.exit_filter_btn').on('click', function () {
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('.overlay').toggleClass('show');
	});
	$('.overlay').on('click', function () {
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('.overlay').toggleClass('show');
	});

	$('.main_img').on('click', function(){
		$('.overlay').toggleClass('show');
	});

	var i_type_trig = 1;
	var tree_modif = 0;
	var tree_moove = 0;

	$('#type_grid').on('click', function () {

		console.log('START type grid');
		if (i_type_trig == 0) {
			// $(this).toggleClass('active');
			// $('#type_list').toggleClass('active');
			$(this).attr("class", "active");
			$("#type_list").attr("class", "");

			$('.block_products').toggleClass('cat_row');
			$('.block_products').toggleClass('grid');

			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			
			$('.item_wrap > div:nth-child(2)').toggleClass('top_info');
			$('.item_wrap > div:nth-child(2)').toggleClass('ct_hide');

			$('.retail_price').toggleClass('ct_hide');

			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');

			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');


			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');

			
			if($('.item_wrap').find('.limit').length > 0){
				$('.limit').toggleClass('ct_hide');
				console.log('TYPE GRID limit > 0 TOGGLE');

			}
			else{
				console.log('TYPE GRID limit > 0 else');
			}
			if($('.item_wrap').find('.ost').length > 0){
				$('.ost').toggleClass('ct_hide');
				console.log('TYPE GRID ost > 0 TOGGLE');
			}
			else{
				console.log('TYPE GRID ost > 0 else');
			}
			
		}

		var total_items = $('.item_wrap').length;

		$('.item_wrap').each(function (index, value) {
			console.log('Begin of ' + index + 'item');
			console.log('index = ' + index + value);

			//for other item status
			$(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
			//end of changing other item status

			if (i_type_trig == 0) {

				var artcl_tmp = $(value).find('.itm_artic_wrap');
				var bage_tmp = $(value).find('.bage');

				if (tree_moove == 1) {
					$(value).find('.h_wrap').unwrap('.col-xs-7.col-sm-4');
					var p_wrap_tmp = $(value).find('.p_wrap');
					$(value).find('.p_wrap').remove()

					$(p_wrap_tmp).insertAfter($(value).find(".h_wrap"));
					var btn_tmp = $(value).find('.btn_buy_wrap');
					$(value).find('.btn_buy_wrap').remove();

					$(btn_tmp).appendTo($(value).find(">.row"));
				}
				else {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					$(value).find('.p_wrap').remove()
					$(value).find('.btn_buy_wrap').remove();
				}
				if (tree_modif == 1) {

					$(value).find('.bage').remove();
					$(bage_tmp).appendTo($(value).find('> .top_info > div:nth-child(1)'));

					$(value).find('.itm_artic_wrap').remove();
					$(artcl_tmp).appendTo($(value).find('> .top_info > div:nth-child(2)'));
				}
				else {

				}
				if (index === total_items - 1) {
					i_type_trig = 1;
					tree_modif = 0;
					tree_moove = 0;
				} else {
					// console.log('It is not last item');
					// console.log('Current item = ' + index);
				}
			}

			//for other item status
			if( $(value).hasClass('absent')){
				// $(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
			}
			if( $(value).hasClass('coming_soon')){
				// $(value).toggleClass('border-test');		
				$(value).find('.message_wrap').attr("class", "message_wrap");

			}
			if( $(value).hasClass('under_the_order')){

				$(value).find('.message_wrap').attr("class", "message_wrap");
				// $(value).find('.btn_order_wrap').parent().toggleClass('border-test');
				var btn_ord_tmp = $(value).find('.btn_order_wrap');
				$(value).find('.btn_order_wrap').parent().toggleClass('col-xs-12 col-sm-4 col-md-3 col-sm-offset-1 col-md-offset-1 pln-md prn-md');

				// $(btn_tmp).insertAfter($(value).find(".counter_wrap"));					
			}
			//end of changing other item status
		});
	});

	$('#type_list').on('click', function () {

		if (i_type_trig == 1) {

			// $(this).toggleClass('active');
			// $('#type_grid').toggleClass('active');
			$(this).attr("class", "active");
			$("#type_grid").attr("class", "");

			// Instead of .addClass("newclass")
			// $("#item").attr("class", "oldclass newclass");
			// Instead of .removeClass("newclass")
			// $("#item").attr("class", "oldclass");

			$('.block_products').toggleClass('cat_row');
			$('.block_products').toggleClass('grid');

			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			
			$('.item_wrap> div:first-child').toggleClass('top_info');
			$('.item_wrap > div:nth-child(1)').toggleClass('ct_hide');


			// $('.retail_price').toggleClass('ct_hide');

			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');

			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');

			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');

		}

		var total_items = $('.item_wrap').length;

		$('.item_wrap').each(function (index, value) {

			console.log('index = ' + index + value);
			if (i_type_trig == 1) {

				var bage = $(value).find('.bage');
				var artcl_tmp = $(value).find('.itm_artic_wrap');
				

				if (tree_moove == 0) {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					var p_wrap_tmp = $(value).find('.p_wrap');
					$(value).find('.p_wrap').remove()
					$(p_wrap_tmp).insertAfter($(value).find(".h_wrap"));

					if($(value).find('.inner_wrap').length > 0){
						// console.log('inner wrap EXIST++++++++++++++++++++');
					}else{
						// console.log('inner wrap NOT EXIST&&&&&&&&&&&&&&&&&&&&&&&');
						$(value).find('.counter_wrap').wrap('<div class="inner_wrap"></div>');

					}
					
					var btn_tmp = $(value).find('.btn_buy_wrap');
					$(value).find('.btn_buy_wrap').remove();
					$(btn_tmp).insertAfter($(value).find(".counter_wrap"));
				}
				else {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					$(value).find('.p_wrap').remove()
					$(value).find('.btn_buy_wrap').remove();
				}

				if (tree_modif == 0) {
					$(value).prepend(bage);

					$(value).find('.h_wrap').prepend(artcl_tmp);
					console.log('tree modif = ' + tree_modif);

					var lim = $(value).find('.limit');
					$(value).find('.limit').remove();
					$(value).find('.inner_wrap').prepend(lim);
					
					var ost = $(value).find('.ost');
					$(value).find('.ost').remove();
					$(value).find('.inner_wrap').append(ost);

				
					if($(value).find('.limit').length > 0){
						$(value).find('.limit').toggleClass('ct_hide');
						console.log('TYPE LIST limit > 0 TOGGLE');
		
					}
					else{
						console.log('TYPE LIST limit > 0 else');
						// $(value).find('.inner_wrap').prepend(lim);
					}

					if($(value).find('.ost').length > 0){
						// $('.ost').toggleClass('ct_hide');
						$(value).find('.ost').toggleClass('ct_hide');
						console.log('TYPE LIST ost > 0 TOGGLE');
		
					}
					else{
						console.log('TYPE LIST ost > 0 else');
						// $(value).find('.inner_wrap').append(ost);
					}
	
					var retail_price = $(value).find('.retail_price');
					$(value).find('.retail_price').remove();

					$(value).find('.p_wrap').append(retail_price);

				
					if($(value).find('.retail_price').length > 0){
						$(value).find('.retail_price').toggleClass('ct_hide');
					}else{
						// $(value).find('.p_wrap').append(retail_price);
					}

				}
				else {
					// $(value).find('.ost').toggleClass('ct_hide');
					console.log('tree modif else toggle 22');

				}
				if (index === total_items - 1) {
					// console.log('LAST index = ' + index);
					i_type_trig = 0;
					// console.log('i_type_trig after last items =' + i_type_trig);
					tree_modif = 1;
					// console.log('tree_modif after last items =' + tree_modif);
					tree_moove = 1;
					// console.log('ТРИМУВ в конце = ' +tree_moove);


				} else {
					// console.log('It is not last item');
					// console.log('Current item = ' + index);
				}

				//for other item status
				if( $(value).hasClass('absent')){
					$(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
				}
				if( $(value).hasClass('coming_soon')){
					// $(value).toggleClass('border-test');		
					$(value).find('.message_wrap').attr("class", "message_wrap col-sm-5");
				}
				if( $(value).hasClass('under_the_order')){

					// $(value).toggleClass('border-test');
					
					// $(value).find('.message_wrap').toggleClass('');
					$(value).find('.message_wrap').attr("class", "message_wrap");
					
					var tmp_massege = $(value).find('.message_wrap');
					$(value).find('.message_wrap').remove();
					$(tmp_massege).appendTo($(value).find('.col-xs-7.col-sm-4'));
					// $(value).find('.message_wrap').remove();
					

					// $(value).find('.btn_order_wrap').parent().toggleClass('border-test');
					var btn_ord_tmp = $(value).find('.btn_order_wrap');
					$(value).find('.btn_order_wrap').parent().toggleClass('col-xs-12 col-sm-4 col-md-3 col-sm-offset-1 col-md-offset-1 pln-md prn-md');

					// $(btn_tmp).insertAfter($(value).find(".counter_wrap"));					
				}
				//end of changing other item status
			}

			// console.log('i_type_trig outside loop =' + i_type_trig);
		});

	});

	$('.sidebarMenuInner .main-item').on('click', function () {
		if ($(window).width() < 768) {
			$('#sidebarMenu').toggleClass('slide-mm');
			console.log('click main');
		}
	});

	// if ($(window).width() < 768) {
	// 	$('.wrap_img .wrap_name').wrap('<div clas="wrap_mob"></div>');
	// 	console.log('wrap');
	// }

	$('#back_btn_mnu').on('click', function () {
		// if ( $("#sidebarMenu").hasClass("slide-mm") ) {

		// 	alert("У элемента задан класс slide-mm!");

		// }
		// $('#sidebarMenu').toggleClass('slide-mm');
		// console.log('click back');
	});

	// 	/*Inmut multirange*/

// 	var lowerSlider = document.querySelector('#range-lower');
// 	var upperSlider = document.querySelector('#range-upper');

// 	document.querySelector('#two').value = upperSlider.value;
// 	document.querySelector('#one').value = lowerSlider.value;

// 	var lowerVal = parseInt(lowerSlider.value);
// 	var upperVal = parseInt(upperSlider.value);

// 	upperSlider.oninput = function () {
// 		lowerVal = parseInt(lowerSlider.value);
// 		upperVal = parseInt(upperSlider.value);

// 		if (upperVal < lowerVal + 4) {
// 			lowerSlider.value = upperVal - 4;
// 			if (lowerVal == lowerSlider.min) {
// 				upperSlider.value = 4;
// 			}
// 		}
// 		document.querySelector('#two').value = this.value
// 	};

// 	lowerSlider.oninput = function () {
// 		lowerVal = parseInt(lowerSlider.value);
// 		upperVal = parseInt(upperSlider.value);
// 		if (lowerVal > upperVal - 4) {
// 			upperSlider.value = lowerVal + 4;
// 			if (upperVal == upperSlider.max) {
// 				lowerSlider.value = parseInt(upperSlider.max) - 4;
// 			}
// 		}
// 		document.querySelector('#one').value = this.value
// 	};

// 	// var lowerSlider = document.querySelector('#range-lower').value;
// 	// var upperSlider = document.querySelector('#range-upper').value;
// 	// document.querySelector('#one').value= lowerSlider;
// 	// document.querySelector('#two').value= upperSlider;


// });


// document.addEventListener('DOMContentLoaded', function () {
// 	var container = document.querySelector('.input-range-container');
// 	var rangeLower = document.querySelector('input[name="range-lower"]');
// 	var rangeUpper = document.querySelector('input[name="range-upper"]');
// 	var trackerBetween = document.querySelector('.input-range-tracker-between');
// 	var minValue = 0;
// 	var maxValue = Number(rangeUpper.getAttribute('max'));

// 	var containerHoverOnPercent = 0;

// 	var updateTrackerBetween = function updateTrackerBetween() {
// 		var lowerValue = Number(rangeLower.value);
// 		var upperValue = Number(rangeUpper.value);
// 		trackerBetween.style.width = (upperValue - lowerValue) / maxValue * 100 + '%';
// 		trackerBetween.style.left = lowerValue / maxValue * 100 + '%';
// 	};
// 	updateTrackerBetween();

// 	var moveAppropriateThumbToUpper = function moveAppropriateThumbToUpper() {
// 		var lowerValue = Number(rangeLower.value);
// 		var upperValue = Number(rangeUpper.value);
// 		var closeValue = maxValue / 10;

// 		if (upperValue - lowerValue < closeValue && upperValue > maxValue * .9) {
// 			rangeLower.classList.add('display-upper');
// 			rangeUpper.classList.remove('display-upper');
// 		} else if (upperValue - lowerValue < closeValue && lowerValue < maxValue * .1) {
// 			rangeLower.classList.remove('display-upper');
// 			rangeUpper.classList.add('display-upper');
// 		} else {
// 			var middleValue = lowerValue + (upperValue - lowerValue) / 2;
// 			if (containerHoverOnPercent < middleValue / maxValue) {
// 				rangeLower.classList.add('display-upper');
// 				rangeUpper.classList.remove('display-upper');
// 			} else {
// 				rangeLower.classList.remove('display-upper');
// 				rangeUpper.classList.add('display-upper');
// 			}
// 		}
// 	};

// 	['mouseenter', 'mousemove', 'touchstart', 'touchmove'].forEach(function (eventName) {
// 		container.addEventListener(eventName, function (event) {
// 			containerHoverOnPercent = event.offsetX / event.target.clientWidth;
// 			moveAppropriateThumbToUpper();
// 		}, false);
// 	});

// 	rangeLower.addEventListener('input', function (event) {
// 		var lowerValue = Number(event.target.value);
// 		var upperValue = Number(rangeUpper.value);
// 		if (lowerValue < minValue) {
// 			event.target.value = minValue;
// 		} else if (lowerValue > upperValue) {
// 			event.target.value = upperValue;
// 		}

// 		moveAppropriateThumbToUpper();
// 		updateTrackerBetween();
// 	}, false);

// 	rangeUpper.addEventListener('input', function (event) {
// 		var lowerValue = Number(rangeLower.value);
// 		var upperValue = Number(event.target.value);
// 		if (upperValue > maxValue) {
// 			event.target.value = maxValue;
// 		} else if (upperValue < lowerValue) {
// 			event.target.value = lowerValue;
// 		}

// 		moveAppropriateThumbToUpper();
// 		updateTrackerBetween();
// 	}, false);

});