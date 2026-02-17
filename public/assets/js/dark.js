function enableDarkMode() {
	document.body.classList.add('dark-mode');
	localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
	document.body.classList.remove('dark-mode');
	localStorage.setItem('theme', 'light');
}

function isMobile() {
	return window.matchMedia("(max-width: 2000px)").matches;
}

function detectColorScheme() {

	if (isMobile()) {
		enableDarkMode();
		return;
	}

	let theme = 'light';

	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}

	theme === 'dark' ? enableDarkMode() : disableDarkMode();
}

detectColorScheme();

const toggleBtn = document.getElementById('dark-mode-toggle');

if (toggleBtn) {
	toggleBtn.addEventListener('click', () => {
		localStorage.getItem('theme') === 'light'
			? enableDarkMode()
			: disableDarkMode();
	});
}
