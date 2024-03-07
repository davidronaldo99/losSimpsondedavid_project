// Realiza una solicitud a la API de citas de Los Simpson para obtener un conjunto de datos de 50 citas
fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50') 
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => { // Maneja los datos obtenidos
        // Obtiene el contenedor donde se agregarán las tarjetas de personajes
        const container = document.getElementById('personajes');
        // Crea un conjunto para almacenar los personajes ya utilizados
        const charactersUsed = new Set();

        // Itera sobre cada entrada de datos obtenida
        data.forEach(entry => {
            // Verifica si el personaje ya ha sido agregado
            if (!charactersUsed.has(entry.character)) {
                // Si el personaje no está en el conjunto, se agrega al conjunto para evitar repeticiones
                charactersUsed.add(entry.character);

                // Crea un nuevo elemento div para representar la tarjeta del personaje
                const card = document.createElement('div');
                card.classList.add('card', 'col'); // Agrega clases CSS para dar estilo a la tarjeta
                card.style.width = '18rem'; // Establece el ancho de la tarjeta

                // Rellena el contenido de la tarjeta con la imagen del personaje, su nombre, descripción y cita
                card.innerHTML = `
                    <img src="${entry.image}" class="card-img-top" alt="${entry.character}">
                    <div class="card-body">
                        <h5 class="card-title">${entry.character}</h5>
                        <p class="card-text">${entry.description}</p>
                        <p class="card-text">${entry.quote}</p>
                    </div>
                `;

                // Agrega la tarjeta al contenedor de personajes en la página web
                container.appendChild(card);
            }
        });
    })
    .catch(error => console.error('Error:', error)); // Captura cualquier error que ocurra durante la solicitud o el procesamiento de los datos
