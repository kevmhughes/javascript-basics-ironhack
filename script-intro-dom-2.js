/** Imagina que estos datos vienen de alguna "base de datos". La idea principal es recoger estos datos, que van a ser diferentes en función del pokemon, y colocarlos en una plantilla HTML */

let pokemonData = {
    name: 'Pikachu',
    type: 'Electric',
    description: 'Pikachu is a small, chubby, and incredibly cute mouse-like Pokémon',
    imageURL: 'https://img.pokemondb.net/artwork/avif/pikachu.avif'
}


/** JavaScript nos permite tomar los datos de forma dinámica de una variable (que puede ser rellenada bien sea por una llamada a una API, o son datos que nos vienen generados des de una base de datos); y colocarlos en aquellas partes del DOM donde corresponda **/
document.querySelector('#poke-name').textContent = pokemonData.name;
document.querySelector('.pokemon-type').textContent = pokemonData.type;
document.querySelector('.pokemon-description').textContent = pokemonData.description;
document.querySelector('.pokemon-image').src = pokemonData.imageURL;

// Si el pokemon es de tipo Fuego, entonces pinta el h2 que indica el tipo de pokemon de rojo (background-color)

if (pokemonData.type == "Fire") {
    // Añadir un estilo en línea para que color de fondo del h2 sea rojo
    document.querySelector('.pokemon-type').style.backgroundColor = "rgb(255, 0, 0)";
}