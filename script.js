const Info = document.getElementById('Info');
const linkElement = document.querySelector('a');
let animationInterval = null;

// Play sound on every click
document.body.addEventListener('click', () => {
	document.getElementById('siren').play();
});

function showInfoWithAnimation() {
	Info.style.display = 'block';
	Info.style.opacity = '0';
	Info.style.transform = 'scale(0.5)';

	if (animationInterval) clearInterval(animationInterval);

	let opacity = 0;
	let scale = 0.5;

	animationInterval = setInterval(() => {
		opacity += 0.05;
		scale += 0.02;

		Info.style.opacity = opacity;
		Info.style.transform = `scale(${scale})`;

		if (opacity >= 1 && scale >= 1) {
			clearInterval(animationInterval);
			animationInterval = null;
		}
	}, 50);
}

// Handle link click
linkElement.addEventListener('click', event => {
	event.preventDefault();
	showInfoWithAnimation();
});

// Close popup when clicking outside
function closePopup() {
	Info.style.display = 'none';
	if (animationInterval) {
		clearInterval(animationInterval);
		animationInterval = null;
	}
}

document.body.addEventListener('click', event => {
	if (!Info.contains(event.target) && event.target !== linkElement) {
		closePopup();
	}
});
