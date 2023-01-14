let currentPokemon;

function getId(id) {
    return document.getElementById(id);
}

function loadDefault() {
    document.getElementById('container2').innerHTML = '';
}

async function loadPokemons() {
    document.getElementById('container').innerHTML = '';  
    for (let i = 0; i < 50; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount ++;
        console.log('Loaded Pokemon', currentPokemon);
        document.getElementById('container').innerHTML += renderPokemons(i);
        changeColor(i);
    }
}

async function loadPokemonsPage() {
    document.getElementById('container2').innerHTML = ''; 
    for (let i = 50; i < 100; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount ++;
        console.log('Loaded Pokemon', currentPokemon);
        document.getElementById('container2').innerHTML += renderPokemons(i);
        changeColor(i);
    }
}

// Hier werden alle Pokemons jeweils (i) geladen!

function renderPokemons(i) {
    return `
    <div onclick="openPopUp(${i})" class="pokeball-container" id="pokeballContainer${i}">
        <img class="poke_pic" id="pokePic${i}" src="${currentPokemon["sprites"]['other']['official-artwork']['front_default']}">
        <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${currentPokemon.id} ${capitalizeFirstLetter(currentPokemon.name)}</h2>
        <div class="element" id="element${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</div>
    </div>
    ${renderPopUp(i)}`;
}

function checkType(i) {
    if(currentPokemon['types'].length == 1) {
        return  `<h4 class="type1" id="type1${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</h4>`;
    }
    else {
        return `<div class="type-box">        
        <h4 class="type1" id="type1${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</h4>
        <h4 class="type2" id="type2${i}">${capitalizeFirstLetter(currentPokemon.types['1'].type.name)}</h4>
        </div>`;
    }
}

// Gallery-Modus: Hier kann zwischen den Poekodex-Bildern hin- und hergewechselt werden!

function openPopUp(i) {
    document.getElementById(`popUp${i}`).classList.remove('d-none');
}

function closePopUp(i) {
    document.getElementById(`popUp${i}`).classList.add('d-none');
}

let pokemonAmount = 0;

function imgSlide(i) {
                                    
    closePopUp(i);                       //wenn man auf den linken Pfeil klickt, wird im 1. Schritt popUp geschlossen
       if (i < pokemonAmount -1) {       //im 2. Schritt wird geprüft, ob die Stelle "i" kleiner ist als 50, wenn das true ist
        ++i;                             //wird i um eins erhöht und
        openPopUp(i);                    //das nächste Bild mit openPopUp angezeigt!
    }
}

function imgSlideBackwards(i) {

    closePopUp(i);                      //wenn man auf den linken Pfeil klickt, wird im 1. Schritt popUp geschlossen
       if (i > 0) {                     //im 2. Schritt wird geprüft, ob die Stelle "i" größer ist als 0, wenn das true ist
        --i;                            //wird i um eins erhöht und
        openPopUp(i);                   //das vorherige Bild mit openPopUp angezeigt!
    }
}

function capitalizeFirstLetter(string) {
    console.log(string.charAt(0).toUpperCase() + string.slice(1));
    return string.charAt(0).toUpperCase() + string.slice(1);
}