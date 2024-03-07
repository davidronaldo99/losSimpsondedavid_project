/// Descripciones personalizadas de los personajes
const customDescriptions = {
    "Marge Simpson": "La compasiva y amorosa esposa de Homer Simpson.",
    "Otto": "El despreocupado y desaliñado conductor del autobús escolar de Springfield.",
    "Apu Nahasapeemapetilon": "El amable y trabajador propietario del Kwik-E-Mart.",
    "Troy McClure": "El carismático y a menudo olvidado actor de cine y televisión.",
    "Milhouse Van Houten": "El torpe y desafortunado mejor amigo de Bart Simpson.",
    "Chief Wiggum": "El incompetente y descuidado jefe de policía de Springfield.",
    "Abraham Simpson": "El anciano y veterano de guerra padre de Homer Simpson.",
    "Moe Szyslak": "El solitario y gruñón dueño de la taberna de Moe.",
    "Comic Book Guy": "El friki y pedante propietario de la tienda de cómics de Springfield.",
    "Alcalde Quimby": "El corrupto y mujeriego alcalde de Springfield.",
    "Frank Grimes": "El meticuloso y trabajador empleado de la planta nuclear de Springfield.",
    "Waylon Smithers": "El leal y devoto asistente ejecutivo del Sr. Burns.",
    "Principal Skinner": "El estricto y autoritario director de la Escuela Primaria de Springfield.",
    "Mr. Burns": "El malvado y avaricioso propietario de la Planta Nuclear de Springfield.",
    "Groundskeeper Willie": "El rudo y escocés encargado del mantenimiento en la Escuela Primaria de Springfield.",
    "Dr. Nick": "El poco ortodoxo y a menudo inepto médico de Springfield.",
    "Duffman": "El enérgico y entusiasta portavoz de la cerveza Duff.",
    "Bart Simpson": "El travieso y bromista hijo menor de la familia Simpson.",
    "Nelson Muntz": "El matón de la escuela primaria de Springfield.",
    "Homer Simpson": "El patriarca de la familia Simpson.",
    "Abe Simpson": "El anciano y veterano de guerra padre de Homer Simpson.",
    "Rainier Wolfcastle": "El actor musculoso y estrella de acción conocido por su papel como McBain.",
    "Lisa Simpson": "La inteligente y reflexiva hija mediana de la familia Simpson.",
    "Mayor Quimby": "El corrupto y despreocupado alcalde de Springfield.",
    "Ralph Wiggum": "El inocente e ingenuo compañero de clase de Lisa Simpson."

};
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

                // Obtiene la descripción personalizada del personaje, si está disponible
                const customDescription = customDescriptions[entry.character] || entry.description;

                // Rellena el contenido de la tarjeta con la imagen del personaje, su nombre, descripción y cita
                card.innerHTML = `
                    <img src="${entry.image}" class="card-img-top" alt="${entry.character}">
                    <div class="card-body">
                        <h5 class="card-title">${entry.character}</h5>
                        <p class="card-text">${customDescription}</p>
                        <p class="card-text">${entry.quote}</p>
                    </div>
                `;

                // Agrega la tarjeta al contenedor de personajes en la página web
                container.appendChild(card);
            }
        });
    })
    .catch(error => console.error('Error:', error)); // Captura cualquier error que ocurra durante la solicitud o el procesamiento de los datos
