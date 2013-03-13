
//= require jquery
//= require jquery_ujs
//= require foundation
//= require parallax
//= require mixpanel
//= require_self

$(document).foundation();

$(document).ready(function() {

	function mixpanel_register(email) {
		console.log("Mixpanel: user registration");
		mixpanel.identify(email);
	    mixpanel.people.set({
	    	email: email
	    });
	};

	$('.main-submit input[type="submit"]').click(function() {
		//mixpanel_register($('.main-submit').find('input[type="email"]').val());
		$('.main-submit').find('form').hide().animate(200);
		$('.main-submit').find('.success-message').show().animate(200);
		return false;
	});

	$('.second-submit input[type="submit"]').click(function() {
		//mixpanel_register($('.second-submit').find('input[type="email"]').val());
		$('.second-submit').find('form').hide().animate(200);
		$('.second-submit').find('.success-message').show().animate(200);
		return false
	});

});
