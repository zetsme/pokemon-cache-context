export const fetchPokemon = async (query, delay = 1500) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, {
    headers: {
      delay: delay,
    },
  });
  const data = await res.json();
  return data;
};

export const getRandomNames = async (limit = 3) => {
  const count = 1118;
  const offset = Math.floor(Math.random() * (count - limit));
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data;
};
