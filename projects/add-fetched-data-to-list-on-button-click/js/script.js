const apiUrlBase = "https://pokeapi.co/api/v2/pokemon/";
const delay = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), x);
  });
};

const fetchPokemon = async (pokeId) => {
  await delay(2000);
  const url = `${apiUrlBase}${pokeId}`;
  const resp = await fetch(url);
  const pokemon = await resp.json();
  return pokemon;
};

const getRandomPokeId = () => {
  return Math.floor(Math.random() * 150) + 1;
};

const setLoadingState = (isLoading) => {
  const buttonElement = document.getElementById("add-pokemon-button");
  buttonElement.disabled = isLoading === true;
};

const fetchRandomPokemonAndAddToList = async () => {
  const listElement = document.getElementById("pokemon-list");

  setLoadingState(true);

  const pokemon = await fetchPokemon(getRandomPokeId());
  listElement.insertAdjacentHTML(
    "beforeend",
    `<li ><a class="rounded-md">${pokemon.name}</a></li>`
  );

  setLoadingState(false);
};

fetchRandomPokemonAndAddToList();
