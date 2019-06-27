(() => {

let inner = document.getElementsByClassName('text-wrap__carousel-inner')[0];
let upBtn = document.getElementsByClassName('fa-chevron-up')[0];
let dwnBtn = document.getElementsByClassName('fa-chevron-down')[0];
let items = document.getElementsByClassName('text-wrap__item');
let currentStep = 0;
let width = 0;
let pos = inner.style;
let screenWidth = document.documentElement.clientWidth;

upBtn.onclick = () => {
	if (currentStep == items.length - 2) {
		currentStep = 0;
		width = 0;
		pos.top = width;
	} else {
		if (screenWidth <= 460) {
			width -= 315;	
		} else {
			width -= 265;
		}
		pos.top = width + "px";
		++currentStep;
	}
};

dwnBtn.onclick = () => {
	if (currentStep == 0) {
		currentStep = items.length - 2;
		if (screenWidth <= 460) {
			width = -1260;	
		} else {
			width = -1060;
		}
		
		pos.top = width + "px";
	} else {
		if (screenWidth <= 460) {
			width += 315;	
		} else {
			width += 265;
		}
		pos.top = width + "px";
		--currentStep;
	}
}
})()