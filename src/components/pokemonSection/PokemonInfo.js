import { useEffect } from 'react';
import { fetchPokemon } from '../../api';
import { usePokemonCache } from '../../context';
import useAsync from '../../useAsync';
import PokemonDataView from './PokemonDataView';
import PokemonInfoFallback from './PokemonInfoFallback';

const PokemonInfo = ({ pokemonName }) => {
  const { cache, dispatch } = usePokemonCache();
  const { data: pokemon, status, run, setData, error } = useAsync();

  useEffect(() => {
    if (!pokemonName) {
      return;
    } else if (cache[pokemonName]) {
      setData(cache[pokemonName]);
    } else {
      run(
        fetchPokemon(pokemonName).then((pokemonData) => {
          let {
            abilities,
            name,
            sprites: { front_default: img },
            types,
            id,
          } = pokemonData;
          types = types.map((i) => i.type.name);
          abilities = abilities.map((i) => i.ability.name);
          dispatch({
            type: 'ADD_POKEMON',
            pokemonName,
            pokemonData: { abilities, name, img, types, id },
          });
          return pokemonData;
        })
      );
    }
  }, [cache, dispatch, pokemonName, run, setData]);
  if (status === 'idle') {
    return 'Submit a pokemon';
  } else if (status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />;
  } else if (status === 'rejected') {
    throw error;
  } else if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
};

export default PokemonInfo;
