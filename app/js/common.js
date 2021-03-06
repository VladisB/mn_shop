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

	// $('#slct_otd').selectize();

// //sMenu
$('.sidebarMenuInner a').click(function(e) {
	// e.preventDefault();
	console.log('link preventdef');
});

// $('.sidebarMenuInner .main-item').click(function(e) {
// 	// e.preventDefault();
// 	// $(this).find('.inner-list').addClass('display-on');
// 	$('.sidebarMenuInner .main-item').removeClass('active');
// 	$(this).addClass('active');
// 	console.log('li ------ click');
// });

//DropDownMenu
$('.drop_down_button').on('click', function(){
	var lis = $('#white_menu li');
	console.log(lis);
	$('.drop-down-list-wrap').toggleClass('active');
	$(lis).appendTo('.drop-down-list-wrap .drop-down-list-c');

});

var list_height = $('.sidebarMenuInner').height();
$('.sidebarMenuInner .main-item').find('.inner-list-wrap').css('min-height', list_height);
console.log(list_height);
var list_height_main = $('#sidebarMenu_dock .sidebarMenuInner').height();
$('#sidebarMenu_dock .sidebarMenuInner .main-item').find('.inner-list-wrap').css('min-height', list_height);
console.log(list_height_main);

$('#openSidebarMenu').on('click', function () {
	$('.overlay').toggleClass('show');
});

$('.sidebarIconToggle').on('click', function () {
	if(!$('#openSidebarMenu')[0].checked){
		$('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'inline-block');
	}else{
		console.log('unchecked');
		$('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'none');
	}
});

// $('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'inline-block');

$('#openSidebarMenu').parent().on('click', function () {
// $('#openSidebarMenu').parent(".mnu_button_wrap").parent().on('click', function () {
	// 	$('#openSidebarMenu')[0].checked =  !$('#openSidebarMenu')[0].checked ;
	// $('.overlay').toggleClass('show');
	if($('#openSidebarMenu')[0].checked){
		console.log('checked');
	}else{
		console.log('unchecked');
	}
	console.log('this click !!!!');
});

$('.overlay').on('click', function () {
	$('.slide_mobile_filters').toggleClass('f_active_pos');
	$('.sidebarIconToggle').click();
	// $('.sidebarMenuInner .main-item').removeClass('active');

	// $('#openSidebarMenu').click();
});

$('.sidebarMenuInner .main-item').on('click', function () {
	if ($(window).width() < 768) {
		$('#sidebarMenu').toggleClass('slide-mm');
		console.log('click main');
	}
});

//For mobile menu
if ($(window).width() < 769 ) {
	$('.sidebarIconToggle').on('click', function () {
		if(!$('#openSidebarMenu')[0].checked){
			// $('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'inline-block');
		}else{
			console.log('unchecked');
			// $('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'none');
			$('#sidebarMenu').removeClass('slide-mm');
			$('.sidebarMenuInner .main-item').removeClass('mobile-active-item');
		}
	});

	$('.sidebarMenuInner .main-item a').on('click', function(e){
		e.preventDefault();
		$('#sidebarMenu').addClass('slide-mm');
		console.log('SLIDE!!');
	});

	$('.sidebarMenuInner .main-item a').on('click', function(e){
		// e.preventDefault();
		console.log('mobile click');
		$(this).parent().addClass('mobile-active-item');
		$('.mobile-active-item').find('.inner-list-wrap').addClass('mobile-show');
		
		
	});
	$('.back_b').on('click', function(){
		$('#sidebarMenu').removeClass('slide-mm');
		$(this).parent().removeClass('mobile-active-item');
		$(this).closest('.inner-list-wrap').toggleClass('this');
		$(this).closest('.inner-list-wrap').removeClass('mobile-show');
		$(this).closest('.inner-list-wrap').parent().removeClass('mobile-active-item');
	});
	console.log('click main');
}
//end of mobile menu

//second level menu	
// $(".sidebarMenuInner .main-item").hover(function() {
// // 
// 	// $(this).find('.inner-list').addClass('display-on');
// 	console.log('hover turn on');
// });
// $(".sidebarMenuInner .main-item").mouseleave(function() {
// 	// $(this).find('.inner-list').removeClass('display-on');
// 	console.log('hover turn out');
// });			
//end of second level menu

//end sMenu


	// 	//second level menu	
	// 	$(".sidebarMenuInner .main-item").hover(function() {
		
	// 		// $(this).find('.inner-list').addClass('display-on');
	// 		console.log('hover turn on');
	// 	});
	// 	$(".sidebarMenuInner .main-item").mouseleave(function() {
	// 		// $(this).find('.inner-list').removeClass('display-on');
	// 		console.log('hover turn out');
	// 	});			
	// 	$(".sub-item").click(function(e) {
	// 		// e.preventDefault();
	// 		// $(this).find('.inner-list').removeClass('display-on');
	// 		console.log('subItem Click');
	// 	});			
	// //end of second level menu
	
	// $('#openSidebarMenu').on('click', function () {
	// 	$('.overlay').toggleClass('show');
	// 	console.log('MENU CLICK');
	// });

	// $('.sidebarMenuInner .main-item').children().click(function(e) {
	// 	$(this).toggleClass('clicks');
	// 	console.log('link preventdef');
	// });
	// $('#openSidebarMenu').parent().parent().on('click', function () {
	// 			$('#openSidebarMenu')[0].checked =  !$('#openSidebarMenu')[0].checked ;
	// 	// 	$('.overlay').toggleClass('show');
	// 		console.log('this click !!!!');
	// });

	

	// $('.child_element').on('click', function(){
	// 	$(this).parent().toggleClass('green-text');
	// });

	// $('.sidebarMenuInner >.main-item').click(function(e) {
	// 	// e.preventDefault();
	// 	// $(this).find('.inner-list').addClass('display-on');
	// 	$('.sidebarMenuInner .main-item').removeClass('active');
	// 	$(this).addClass('active');
	// 	console.log('li');
	// });
	
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

	//Seo block
	$(".more_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo:first-child").toggleClass("hide_seo_link");
		if ($(window).width() > 768) {
			$(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
			$(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
		}
	});
	$(".less_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo:first-child").toggleClass("hide_seo_link");
		// $(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
		// $(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
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
	
		if(!$(this).find('.block_info.closed').length > 0){
			console.log('one');
			console.log('close');
			var self = $(this);
			console.log(self);
			$(this).find('.block_info').addClass('closed');
			setTimeout(function(){
				self.find('.block_info').addClass('dn');
			}, 300);
		}else{
			console.log('two');
			$(this).find('.block_info').removeClass('closed');
			$(this).find('.block_info').removeClass('dn');
		}
		
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

//--btn-buy-absent--//

$('.btn_absent').click(function(){
	var tmp_popup = '<div class="popup-window"></div>';
	$(tmp_popup).insertAfter($('.overlay'));
	setTimeout(function(){
		$('.popup-window').toggleClass('active');
		$('.popup-window').toggleClass('show_pop');
	},200);
	setTimeout(function(){
		$( ".popup-window" ).append("<div class='window-container'></div>");
		$( ".window-container" ).append('<svg id="modal_exit" width="21px" height="21px" viewBox="0 0 21 21" version="1.1"><title>EBA93EB7-E714-432B-AF2F-5DA3BB321A8D</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="1.1.Produkt-ended---Large-desktop" transform="translate(-875.000000, -499.000000)" fill="#9E9E9E"><path d="M895.506534,517.102174 L893.102538,519.503833 C892.783237,519.823175 892.342548,520 891.899221,520 C891.458532,520 891.015205,519.823175 890.698542,519.503833 L885.5,514.307277 L880.304097,519.503833 C879.987434,519.823175 879.544107,520 879.103418,520 C878.66009,520 878.219402,519.823175 877.900101,519.503833 L875.496105,517.102174 C875.176803,516.782833 875,516.342089 875,515.898706 C875,515.457962 875.176803,515.014578 875.496105,514.697876 L880.694647,509.49868 L875.496105,504.299485 C875.176803,503.982782 875,503.539399 875,503.098655 C875,502.655272 875.176803,502.214528 875.496105,501.895187 L877.900101,499.493528 C878.219402,499.174186 878.66009,499 879.103418,499 C879.544107,499 879.987434,499.174186 880.304097,499.493528 L885.5,504.690084 L890.698542,499.493528 C891.015205,499.174186 891.458532,499 891.899221,499 C892.342548,499 892.783237,499.174186 893.102538,499.493528 L895.506534,501.895187 C895.825836,502.214528 896,502.655272 896,503.098655 C896,503.539399 895.825836,503.982782 895.506534,504.299485 L890.307992,509.49868 L895.506534,514.697876 C895.825836,515.014578 896,515.457962 896,515.898706 C896,516.342089 895.825836,516.782833 895.506534,517.102174" id="Fill-1"></path></g></g></svg>');
		$( ".window-container" ).append('<div class="top_line">	<div class="modal_name ">Введите телефон</div><div class="modal_message hidden">Ваша заявка принята. Мы свяжемся с Вами как только этот товар появится на складе.</div></div>');
		$( ".window-container" ).append('	<input type="text" name="phone" placeholder="Телефон" class="" id="mod_phone"><button class="primary_btn" id="m_ord_btn">Оформить</button><button class="primary_btn hidden" id="m_ok_btn">Ок</button>');
	}, 300);
	setTimeout(function(){
		$( ".window-container" ).toggleClass('active');
	},400);
	console.log('click on button');

});

function exit_popup(){
	$( ".popup-window" ).toggleClass('show_pop');
	setTimeout(function(){
		$( ".popup-window" ).remove();
	},400);
}
$(document).on('click', '#modal_exit', function () {
	$(this).parent().toggleClass('active');
	setTimeout(function(){
		exit_popup();
	}, 300);
});

$(document).on('click', '#m_ok_btn', function () {
	exit_popup();
});

$(document).on('click', '#m_ord_btn', function () {
	if( $('#mod_phone').val().length === 0 ){
		console.log('empty input');
	}else{
		$('#mod_phone').toggleClass("hidden");
		$('.modal_name').toggleClass("hidden");
		$('.modal_message').toggleClass("hidden");
		$('#m_ok_btn').toggleClass("hidden");
		$(this).toggleClass("hidden");
	}
});
//--btn-buy-absent-end-//


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
		// $('.overlay').toggleClass('show');
		if($(this).hasClass('show1k')){
			console.log('HAS');
			$(this).toggleClass('show1k');
		}else{
			$('.overlay').toggleClass('show');
			console.log('has not');
		}
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