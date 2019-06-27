const slowScroll = id => {
	let elem = document.querySelector(id);
	elem.scrollIntoView({behavior: "smooth"});
};

