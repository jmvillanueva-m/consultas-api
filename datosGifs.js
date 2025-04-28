// Peticiones a la API GIPHY

const obtenerGif= async () => {
    const gifsContainers = document.getElementById('list-gifs');
    const gifTemplate = document.getElementById('gif'); 

    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=luffy-gear-5"); 

    const respuesta = await request.json();

    respuesta.data.slice(0, 8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = gif.images.original.url; 
        gifsContainers.appendChild(newGifCard);
    });
    gifTemplate.remove();
}
obtenerGif();