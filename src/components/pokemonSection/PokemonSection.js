import { PokemonCacheProvider } from '../../context';
import PokemonErrorBoundry from '../PokemonErrorBoundry';
import PokemonInfo from './PokemonInfo';
import PokemonPrevius from './PokemonPrevius';

const PokemonSection = ({ onSelect, pokemonName }) => {
  return (
    <PokemonCacheProvider>
      <section className='pokemon__section'>
        <PokemonPrevius onSelect={onSelect} />
        <PokemonErrorBoundry resetKeys={[pokemonName]} onReset={() => onSelect('')}>
          <PokemonInfo pokemonName={pokemonName} />
        </PokemonErrorBoundry>
      </section>
    </PokemonCacheProvider>
  );
};

export default PokemonSection;
