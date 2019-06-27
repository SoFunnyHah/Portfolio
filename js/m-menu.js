(() => {
	const open = document.getElementsByClassName('m-menu__open')[0];
	const link = document.getElementsByClassName('m-menu__link');
	let close = document.getElementsByClassName('m-menu__close')[0];
	let menu = document.getElementsByClassName('m-menu')[0];

	close.onclick = event => {
		event.preventDefault();
		menu.classList.remove('m-menu_active');
		document.body.classList.toggle('body_ovr_hidden');
	};

	for (let i = 0; i < link.length; i++) {
		link[i].onclick = event => {
		event.preventDefault();
		document.body.classList.toggle('body_ovr_hidden');
		menu.classList.toggle('m-menu_active');
	}
	}
})();