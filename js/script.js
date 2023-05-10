function toggleNav() {
	let aside = document.getElementById('sidebar');
	aside.classList.toggle('sidebar--active');
}

let button = document.getElementById('navToggleButton');
button.addEventListener('click', toggleNav);
