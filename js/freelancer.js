/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('body').on('click', '.page-scroll a', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1100, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Floating label headings for the contact form
$(function () {
	$('body').on('input propertychange', '.floating-label-form-group', function (e) {
		$(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
	}).on('focus', '.floating-label-form-group', function () {
		$(this).addClass('floating-label-form-group-with-focus');
	}).on('blur', '.floating-label-form-group', function () {
		$(this).removeClass('floating-label-form-group-with-focus');
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
	if (!$(this).hasClass('dropdown-toggle')) {
		$('.navbar-toggle:visible').click();
	}
});

//nav animation toggle
$('.navbar-toggle').on('click', function (evt) {
	$('.navbar-toggle').toggleClass('active');
});

$(function () {
	wow = new WOW(
		{
			animateClass: 'animated',
			offset: 100
		}
	);
	wow.init();
});
$(document).ready(responsive);
$(window).resize(responsive);
function responsive() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	//header
	if (width >= 768) {
		$('header').css('height', height);
		if (height < 630) {
			$('header').css('height', '42em');
		}
	}
	else {
		$('header').css('height', height / 2);
		if (height < 760) {
			$('header').css('height', '25em');
		}
	}
}

//Skills
var isAlreadyExecuted = false;
$(window).scroll(function () {
	var hT = $('#skills-container').offset().top,
		hH = $('#skills-container').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT + hH - wH)) {
		if (!isAlreadyExecuted) {
			$('#skills-container').css('opacity', '1');
			$('#skills-container').hide();
			$('#skills-container').fadeIn(1500);
			isAlreadyExecuted = true;
			$('progress').each(function () {
				var max = $(this).val();
				$(this).val(0).animate({ value: max }, { duration: 1500, easing: 'easeOutCirc' });
			});
		}
	}
});