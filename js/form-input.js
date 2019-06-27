(() => {
	const inputs = document.getElementsByClassName('form__control');
	const labels = document.getElementsByClassName('form__label');

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('focus', () => {
			labels[i].classList.add('form__label_active');
		})
		inputs[i].addEventListener('focusout', () => {
			if (inputs[i].value == "") {
				labels[i].classList.remove('form__label_active');
			}
		})
	}
})();