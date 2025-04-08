const Info = document.getElementById('Info');
const linkElement = document.querySelector('a');

// Funkcja animacji
function showInfoWithAnimation() {
	Info.style.display = 'block';
	Info.style.opacity = '0';
	Info.style.transform = 'scale(0.5)';

	let opacity = 0;
	let scale = 0.5;

	const animation = setInterval(() => {
		opacity += 0.05;
		scale += 0.02;

		Info.style.opacity = opacity.toString();
		Info.style.transform = `scale(${scale})`;

		if (opacity >= 1 && scale >= 1) {
			clearInterval(animation);
		}
	}, 50);
}

// Kliknięcie w link
linkElement.addEventListener('click', event => {
	event.preventDefault();
	showInfoWithAnimation();
});

document.body.addEventListener(
	'click',
	() => {
		document.getElementById('siren').play();
	},
	{ once: true }
);
