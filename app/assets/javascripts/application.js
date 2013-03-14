
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
			mixpanel.track('new registration');
			mixpanel.identify(email);
	    	mixpanel.people.set({
	    		"Email": email
	    	});
	    	return true
		}
		return false;
	};

	function submit(container) {
		res = mixpanel_register($(container).find('input[type="email"]').val());
		$(container).find('form').fadeOut();
		setTimeout(function() {
			if(res) {
				$(container).find('.success-message').fadeIn();
				setTimeout(function() {
					$(container).find('.success-message').fadeOut();
					setTimeout(function() {
						$(container).find('form').fadeIn();
					}, 500);
				}, 2000);
			} else {
				$(container).find('.error-message').fadeIn();
				setTimeout(function() {
					$(container).find('.error-message').fadeOut();
					setTimeout(function() {
						$(container).find('form').fadeIn();
					}, 500);
				}, 2000);
			}
		}, 500);
		return false;
	}

	$('.main-submit input[type="submit"]').click(function() {
		console.log("Clicked!");
		submit('.main-submit');
		return false;
	});

	$('.second-submit input[type="submit"]').click(function() {
		submit('.second-submit');
		return false;
	});

	mixpanel.track_links('a.facebook-link', 'clicked facebook');
	mixpanel.track_links('a.twitter-link', 'clicked twitter')
	mixpanel.track_links('a.tumblr-link', 'clicked tumblr');

});
