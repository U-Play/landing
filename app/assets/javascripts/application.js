
//= require jquery
//= require jquery_ujs
//= require foundation
//= require parallax
//= require mixpanel
//= require_self

$(document).foundation();

$(document).ready(function() {

	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    	return pattern.test(emailAddress);
	};

	function mixpanel_register(email) {
		if(isValidEmailAddress(email)) {
			mixpanel.identify(email);
	    	mixpanel.people.set({
	    		email: email
	    	});
	    	return true
		}
		return false;
	};

	$('.main-submit input[type="submit"]').click(function() {
		res = mixpanel_register($('.main-submit').find('input[type="email"]').val());
		$('.main-submit').find('form').fadeOut();
		setTimeout(function() {
			if(res) {
				$('.main-submit').find('.success-message').fadeIn();
			} else {
				$('.main-submit').find('.error-message').fadeIn();
			}
		}, 700);
		return false;
	});

	$('.second-submit input[type="submit"]').click(function() {
		res = mixpanel_register($('.second-submit').find('input[type="email"]').val());
		$('.second-submit').find('form').fadeOut().animate(200);
		setTimeout(function() {
			if(res) {
				$('.second-submit').find('.success-message').show().animate(200);
			} else {
				$('.second-submit').find('.error-message').show().animate(200);
			}
		}, 700);
		return false
	});

	mixpanel.track_links('a.facebook-link', 'clicked facebook');
	mixpanel.track_links('a.twitter-link', 'clicked twitter')

});
