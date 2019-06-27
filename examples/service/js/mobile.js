(() => {
	let link = document.getElementsByClassName('m-menu__open')[0];
	let close = document.getElementsByClassName('m-menu__close')[0];
	let menu = document.getElementsByClassName('m-menu')[0];

	link.onclick = event => {
		menu.classList.add('m-menu_active');
		document.body.style.overflow = 'hidden';
		return false;
	}
	close.onclick = event => {
		menu.classList.remove('m-menu_active');
		document.body.style.overflow = 'unset';
		return false;
	}
})();
