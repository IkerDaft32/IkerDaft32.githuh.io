// Preguntas, respuestas y pistas
const preguntas = [
    { pregunta: "¿Dónde nos conocimos?", respuesta: "escuela", pista: "Un lugar lleno de libros y maestros" },
    { pregunta: "¿Comó se llama nuestro hijo?", respuesta: "thor", pista: "Recuerda que murio 3 veces y ahora ni te acuerdas de el" },
    { pregunta: "¿De donde viene mi personalidad?", respuesta: "Batman", pista: "🦇" },
    { pregunta: "¿Cuál fue el primer juego que jugamos?", respuesta: "Minecraft", pista: "Un mundo de cuadros" },
    { pregunta: "¿Desde qué mes me enamore de ti?", respuesta: "Mayo", pista: "Fue el mes que empezamos a hablar" },
    { pregunta: "¿Quieres ser mi novia?", respuesta: "si", pista: "No supe como decirtelo" }
];

let preguntaActual = 0;

// Referencias a los elementos del HTML
const content = document.getElementById('content');
const questionElement = document.getElementById('question');
const hintElement = document.getElementById('hint');
const messageElement = document.getElementById('message');
const inputElement = document.getElementById('answer');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');

// Iniciar el cuestionario
startBtn.addEventListener('click', function() {
    content.style.display = 'block';
    mostrarPregunta();
});

// Función para mostrar la pregunta actual con su pista
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    questionElement.textContent = pregunta.pregunta;
    hintElement.textContent = `Pista: ${pregunta.pista}`;
    inputElement.value = '';  // Limpiar el campo de respuesta
    messageElement.textContent = '';  // Limpiar el mensaje

    // Aplicar diseño especial si es la última pregunta
    if (preguntaActual === preguntas.length - 1) {
        content.classList.add('special-design');
    } else {
        content.classList.remove('special-design');
    }
}

// Validar la respuesta y pasar a la siguiente pregunta
nextBtn.addEventListener('click', function() {
    let respuestaUsuario = inputElement.value.toLowerCase();
    
    if (respuestaUsuario === preguntas[preguntaActual].respuesta.toLowerCase()) {
        messageElement.textContent = '¡Correcto! 💕';
    } else {
        messageElement.textContent = 'Mmm... no es correcto, pues ni modote. ❤️';
    }
    
    // Avanzar a la siguiente pregunta después de un pequeño retraso
    setTimeout(function() {
        preguntaActual++;
        
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            terminarCuestionario();
        }
    }, 2000);  // 2 segundos de retraso para ver la respuesta
});

// Función que se llama al finalizar todas las preguntas
function terminarCuestionario() {
    questionElement.textContent = "¡Dimelo en la escuela! 💖";
    messageElement.textContent = "No voy a ver los mensajes orita ";
    inputElement.style.display = 'none';  // Ocultar el campo de texto
    nextBtn.style.display = 'none';  // Ocultar el botón de siguiente
}
