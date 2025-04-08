const Info = document.getElementById('Info');
const linkElement = document.querySelector('a');

linkElement.addEventListener('click', (event) => {
    event.preventDefault();

    // Początkowe ustawienia elementu
    Info.style.display = 'block';
    Info.style.opacity = '0'; // Początkowa przezroczystość
    Info.style.transform = 'scale(0.5)'; // Zaczynamy od lekkiego zmniejszenia

    // Animacja pojawienia się
    let opacity = 0;
    let scale = 0.5;

    const animation = setInterval(() => {
        opacity += 0.05; // Zwiększamy przezroczystość
        scale += 0.02; // Delikatnie zwiększamy transformację

        Info.style.opacity = opacity.toString();
        Info.style.transform = `scale(${scale})`;

        if (opacity >= 1 && scale >= 1) {
            clearInterval(animation); // Zatrzymujemy animację, gdy osiągnie końcowy stan
        }
    }, 50); // Szybkość animacji (50ms)
});
