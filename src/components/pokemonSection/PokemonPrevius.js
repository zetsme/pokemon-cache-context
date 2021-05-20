import { usePokemonCache } from '../../context';

const PokemonPrevius = ({ onSelect }) => {
  const { cache } = usePokemonCache();

  return (
    <div className='pokemon__previus'>
      <ul className='pokemon__previusList'>
        {Object.keys(cache).map((pokemonName) => (
          <li key={pokemonName}>
            <button onClick={() => onSelect(pokemonName)}>{pokemonName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonPrevius;
