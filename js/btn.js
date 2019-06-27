$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('#up-btn').fadeIn();
		}
		else {
			$('#up-btn').fadeOut();
		}
	});
	$('#up-btn').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});