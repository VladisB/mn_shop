$(function() {

	window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }

	inputNumber($('.input-number'));
	/* input counter end */

		//for replaceing path for big img
		$(".small_img").click(function() {
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

	/*Slide down*/
	// $(".slider-show").click(function (){
	// 	$(this).closest(".clump").find(".detail").removeClass("closed");
	// });
	// $(".slider-close").click(function (){
	// 	$(this).closest(".clump").find(".detail").addClass("closed");
	// });

	$(".more").click(function (){
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".more").addClass("hide_link");
		$(this).closest(".clump").find(".less").removeClass("hide_link");
	});
	$(".less").click(function (){
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".more").removeClass("hide_link");
		$(this).closest(".clump").find(".less").addClass("hide_link");
	});

	$(".header_slide").click(function (){
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").removeClass("hide_link");
	});
	$(".header_slide_inside").click(function (){
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").addClass("hide_link");
	});

	$(".sb_header_slide").click(function (){
		$(this).closest(".clump").find(".sb_detail").removeClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").removeClass("hide_link");
	});
	$(".sb_header_slide_inside").click(function (){
		$(this).closest(".clump").find(".sb_detail").addClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").addClass("hide_link");
	});

	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
	});

	$('.sidebarMenuInner .main-item').on('click', function () {
		if($(window).width() < 768){
			$('#sidebarMenu').toggleClass('slide-mm');
			console.log('click main');
		}
	});


	$('#back_btn_mnu').on('click', function () {
		// if ( $("#sidebarMenu").hasClass("slide-mm") ) {

		// 	alert("У элемента задан класс slide-mm!");
			
		// }
		// $('#sidebarMenu').toggleClass('slide-mm');
		// console.log('click back');
	});

	// $('.primary_btn').on('click', function () {
	// 	$('.primary_btn.tg').toggleClass('go');
	// 	console.log('click');
	// 	// $('#openSidebarMenu').toggleClass('slide-mm');
	// 	// console.log('click main');
	// });

	// $("#openSidebarMenu").click(function() {
  
	// 	$(".focus_wrap").is(":visible")?$(".focus_wrap").fadeOut(300):$(".focus_wrap").fadeIn(300);
	// 		});
	// $("#openSidebarMenu").click(function() {
	// 	// $(this).toggleClass("on");
	// 	// $(".focus_wrap").css("opacity", '1');
	// 	$(".focus_wrap").toggleClass("on-focus");
	// 	// $(this).parent().next().next().find(".main-mnu").slideToggle();
	// 	// return false;
	// });
	// $('#openSidebarMenu').click(function(){
	// 	console.log('click');
		
		// $("#focus_wrap").css("display", "block");
		// if(	$("#focus_wrap").css("display", "block")){
		// 	$("#focus_wrap").css("display", "none");
		// }
	// });

	// $("#sidebarMenu .sidebarMenuInner li").click(function(){
	// 	// $("ul").slideToggle();
	// 	// console.log("click");
	// 	// $("ul ul").css("display", "none");
	// });
	
});
