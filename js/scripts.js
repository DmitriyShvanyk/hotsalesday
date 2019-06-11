(function () {

	"use strict";

	/*-------------------------------------------------*/
    /* =  nav menu 
    /*-------------------------------------------------*/
	$('.navbar__hamburger').click(function () {
		$(this).toggleClass('open');
		$('.navbar__inner').toggleClass('navbar__inner--open');
	});
	$('.navbar__menu-link').click(function () {
		$('.navbar__hamburger').toggleClass('open');
		$('.navbar__inner').toggleClass('navbar__inner--open');
	});


	/*-------------------------------------------------*/
    /* =  active scroll menu
    /*-------------------------------------------------*/
	var lastId,
		navbar = $(".navbar"),
		navbarHeight = navbar.outerHeight() + 0,
		navbarMenuItems = navbar.find("[href^=#].navbar__menu-link"),
		scrollItems = navbarMenuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});
	navbarMenuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - navbarHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 400);
		e.preventDefault();
	});
	$(window).scroll(function () {
		var fromTop = $(this).scrollTop() + navbarHeight;
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop) return this;
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
			lastId = id;
			navbarMenuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
		}
	});



	/*-------------------------------------------------*/
    /* =  fancybox popup
    /*-------------------------------------------------*/
	$(".modalbox").fancybox({
		padding: 0,
		fitToView: false,
		maxWidth: 400,
		maxHeight: 650,
		width: '100%',
		height: '100%',
		autoSize: false,
		wrapCSS: 'fancybox-modal-form',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});


	/*-------------------------------------------------*/
    /* =  lazy load
    /*-------------------------------------------------*/
	var bLazy = new Blazy({
		// Options
		offset: 100
	});


	/*-------------------------------------------------*/
    /* =  scroll anchor
    /*-------------------------------------------------*/
	$('.btn a').bind("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 500);
		e.preventDefault();
	});


	// years now 
	function setYears() {
		let yearsHTML = document.querySelectorAll('.js-years');
		for (let i = 0; i < yearsHTML.length; i++) {
			let date = new Date();
			let dateYears = date.getFullYear();
			yearsHTML[i].innerHTML = dateYears;
		}
	}
	setYears();



})();