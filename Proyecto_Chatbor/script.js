// Objeto con respuestas predefinidas
const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'buenos días': '¡Buenos días! ¿En qué puedo ayudarte?',
    'buenas tardes': '¡Buenas tardes! ¿Cómo te va?',
    'buenas noches': '¡Buenas noches! Que descanses.',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'hasta luego': 'Hasta luego, ¡vuelve pronto!',
    'gracias': '¡De nada! Estoy aquí para ayudarte.',
    'muchas gracias': '¡Con gusto!',
    'cómo estás': 'Estoy bien, gracias por preguntar. ¿Y tú?',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas y ayudarte con información.',
    'quién eres': 'Soy un chatbot simple, ¡tu asistente virtual!',
    'qué hora es': 'Lo siento, no tengo acceso al reloj, pero puedes mirar la hora en tu dispositivo.',
    'qué día es hoy': 'No puedo acceder a la fecha actual, pero seguro que es un buen día.',
    'cómo te llamas': 'Me llamo ChatBot. ¿Y tú?',
    'cuál es tu color favorito': 'Me gustan los colores digitales, como el azul y el verde.',
    'qué tal': '¡Todo bien por aquí! ¿Y tú cómo estás?',
    'qué haces': 'Estoy aquí esperando para ayudarte y charlar contigo.',
    'estás ocupado': 'No, estoy siempre disponible para ti.',
    'ayuda': 'Claro, dime en qué necesitas ayuda.',
    'puedes ayudarme': 'Sí, dime qué necesitas y veré cómo puedo ayudarte.',
    'dime un chiste': '¿Por qué los programadores confunden Halloween con Navidad? Porque OCT 31 = DEC 25.',
    'eres inteligente': 'Intento serlo, pero todavía estoy aprendiendo.',
    'me gusta programar': '¡Genial! Programar es una habilidad muy valiosa.',
    'eres un robot': 'Sí, soy un programa diseñado para ayudarte.',
    'qué es la inteligencia artificial': 'La inteligencia artificial es la simulación de procesos inteligentes por máquinas.',
    'cuál es la capital de México': 'La capital de México es Ciudad de México.',
    'cuánto es 2 + 2': '2 + 2 es 4.',
    'puedes contar un cuento': 'Había una vez un chatbot que quería aprender a hablar más. ¡Y aquí estoy!',
    'qué tiempo hace': 'No puedo ver el clima, pero espero que sea agradable donde estés.',
    'gracias por tu ayuda': '¡Para eso estoy! Siempre a tu servicio.',
    'eres amigable': 'Sí, ¡trato de serlo!',
    'qué lenguaje de programación usas': 'Estoy hecho con JavaScript para esta página.',
    'puedes recomendar música': 'Me gustan las melodías digitales, ¿qué género prefieres?',
    'qué es un chatbot': 'Un chatbot es un programa que puede conversar con personas de forma automática.',
    'me aburro': '¿Quieres que te cuente un chiste o hablamos de algo?',
    'cuál es tu comida favorita': 'No como, pero me gustan los datos frescos.',
    'qué sabes hacer': 'Puedo responder preguntas sencillas y conversar contigo.',
    'puedes aprender': 'No de forma autónoma, pero mis creadores pueden mejorarme.',
    'hasta pronto': '¡Hasta pronto! Espero hablar contigo de nuevo.',
    'estoy feliz': '¡Qué bueno! Me alegra escucharlo.',
    'estoy triste': 'Lo siento mucho, espero que algo bueno pase pronto.',
    'qué música te gusta': 'Me gustan los sonidos digitales y el código binario.',
    'cuántos años tienes': 'No tengo edad, soy un programa.',
    'quién te creó': 'Fui creado por un desarrollador humano.',
  };
  
  
  // Referencias a elementos del DOM
  const chatBox = document.getElementById('chatBox');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');
  
  // Evento al hacer clic en el botón
  sendButton.addEventListener('click', sendMessage);
  
  // También permitir Enter para enviar
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  
  // Función para enviar mensaje
  function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    if (message === '') return;
  
    // Mostrar mensaje del usuario
    appendMessage(message, 'user');
  
    // Obtener respuesta del chatbot
    const response = getBotResponse(message);
    appendMessage(response, 'bot');
  
    userInput.value = '';
  }
  
  // Función para mostrar mensajes en el chat
  function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Función que retorna una respuesta del bot
  function getBotResponse(input) {
    return responses[input] || 'Lo siento, no entiendo eso.';
  }
  