import { useRef } from 'react';
import PokemonDataView from './PokemonDataView';

const PokemonInfoFallback = ({ name }) => {
  const initialName = useRef(name).current;
  const fallbckPokemonData = {
    name: initialName,
    id: '00',
    img: '/img/fallback-pokemon.jpg',
    abilities: ['ability', 'ability'],
    types: ['type', 'type'],
  };
  return <PokemonDataView pokemon={fallbckPokemonData} />;
};

export default PokemonInfoFallback;
