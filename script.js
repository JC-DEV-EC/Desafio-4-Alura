document.addEventListener('DOMContentLoaded', function() {
    const numero_a_adivinar = Math.floor(Math.random() * 11);
    let intentos_restantes = 3;

    const inputNumero = document.getElementById('inputNumero');
    const btnAdivinar = document.getElementById('btnAdivinar');
    const resultado = document.getElementById('resultado');

    btnAdivinar.addEventListener('click', function() {
        const intento = parseInt(inputNumero.value);

        if (isNaN(intento) || intento < 0 || intento > 10) {
            resultado.textContent = "Por favor, introduce un número válido entre 0 y 10.";
            return;
        }

        if (intento === numero_a_adivinar) {
            resultado.textContent = "¡Felicidades! Has adivinado el número.";
            resultado.classList.add('text-green-500');
            btnAdivinar.disabled = true;
            inputNumero.disabled = true;
        } else {
            intentos_restantes--;
            if (intentos_restantes > 0) {
                resultado.textContent = `Incorrecto. Te quedan ${intentos_restantes} intentos.`;
                resultado.classList.remove('text-green-500');
                resultado.classList.add('text-red-500');
            } else {
                resultado.textContent = `Lo siento, no has adivinado el número. Era ${numero_a_adivinar}.`;
                resultado.classList.remove('text-green-500');
                resultado.classList.add('text-red-500');
                btnAdivinar.disabled = true;
                inputNumero.disabled = true;
            }
        }
    });
});
