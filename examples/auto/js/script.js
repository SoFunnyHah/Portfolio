var slideIndex = 1;
showSlide(slideIndex);

function minusSlide() {
	showSlide(slideIndex -= 1);
}

function plusSlide() {
	showSlide(slideIndex += 1);
}

function currentSlide(a) {
	showSlide(slideIndex = a);
}

function showSlide(n) {
	var i;
	var slides = document.getElementsByClassName('item');
	var dots = document.getElementsByClassName('dots_item');
	if (n < 1) {
		slideIndex = slides.length;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}