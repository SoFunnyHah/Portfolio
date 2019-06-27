(() => {
	const contactBtn = document.getElementsByClassName('circ-btn_value_contacnts')[0];
	const watsapp = document.getElementsByClassName('circ-btn_social_watsapp')[0];
	const telegram = document.getElementsByClassName('circ-btn_social_telegram')[0];
	const vk = document.getElementsByClassName('circ-btn_social_vk')[0];
	const cross = document.getElementsByClassName('fa-times')[0];
	const envelope = document.getElementsByClassName('fa-envelope')[1];

	contactBtn.onclick = () => {
		watsapp.classList.toggle('circ-btn_hide_first');
		telegram.classList.toggle('circ-btn_hide_second');
		vk.classList.toggle('circ-btn_hide_third');
		contactBtn.classList.toggle('circ-btn_animation_true');
		contactBtn.classList.toggle('circ-btn_closed_true');
		cross.classList.toggle('fa-times_disp_none');
		envelope.classList.toggle('fa-envelope_disp_none');
	}
})();