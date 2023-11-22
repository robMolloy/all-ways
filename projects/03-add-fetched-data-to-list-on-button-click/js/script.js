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
  if (isLoading === true) buttonElement.classList.add("is-loading");
  if (isLoading === false) buttonElement.classList.remove("is-loading");
};

const getLoadingState = () => {
  const buttonElement = document.getElementById("add-pokemon-button");
  return buttonElement.classList.contains("is-loading");
};

const fetchRandomPokemonAndAddToList = async () => {
  const listElement = document.getElementById("pokemon-list");
  const pokemon = await fetchPokemon(getRandomPokeId());
  listElement.insertAdjacentHTML(
    "beforeend",
    `<li><a class="rounded-md">${pokemon.name}</a></li>`
  );
};

const beforeRequest = () => {
  const isLoading = getLoadingState();
  if (isLoading) return false;

  setLoadingState(true);
  return true;
};
const afterRequest = () => {
  setLoadingState(false);
};

const handleAddPokemonEvent = async () => {
  const isValid = beforeRequest();
  if (!isValid) return;

  await fetchRandomPokemonAndAddToList();
  afterRequest();
};

handleAddPokemonEvent();
