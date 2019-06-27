function slowScroll(id) {
			$('html, body').animate({
				scrollTop: $(id).offset().top
			}, 400)
		};

function burgerSlowScroll(id) {
			$('.m-menu').removeClass('m-menu_active');
			$('html, body').animate({
				scrollTop: $(id).offset().top
			}, 400)
		}