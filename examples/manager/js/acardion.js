(() => {
	let block = document.getElementsByClassName('block');
	let btn = document.getElementsByClassName('service__btn');
	let bottom = document.getElementsByClassName('block__bottom');

	for (let i = 0; i < btn.length; i++) {
		block[i].addEventListener('click', function() {
			if (bottom[i].style.display == 'flex') {
				bottom[i].style.display = 'none';
				btn[i].classList.remove('fa-sort-up');
				btn[i].classList.add('fa-sort-down');
			} else {
				bottom[i].style.display = 'flex';
				btn[i].classList.remove('fa-sort-down');
				btn[i].classList.add('fa-sort-up');
			}
		})
	}
})()
