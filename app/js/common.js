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
		$(".smol_img").click(function() {
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
		prevArrow: '<div class="right_arrow arrow"><i class="fas fa-chevron-right"></i></div>',
		nextArrow: '<div class="left_arrow arrow"><i class="fas fa-chevron-left"></i></div>',
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
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 481,
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
	// $('#nav-icon4').click(function(){
	// 	$(this).toggleClass('open');
	// 	$('.mobile-mnu').toggleClass('active');
	// });
	
});
