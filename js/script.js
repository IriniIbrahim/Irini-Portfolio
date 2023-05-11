"use strict";

function toggleNav() {
	let aside = document.getElementById('sidebar');
	aside.classList.toggle('sidebar--active');
}

let button = document.getElementById('navToggleButton');
button.addEventListener('click', toggleNav);


$(document).ready(function () {
	$("a.scrollLink").click(function (event) {
		event.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 500);
	});
});