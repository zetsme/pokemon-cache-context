import { useState } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonSection from './components/pokemonSection/PokemonSection';

const App = () => {
  const [pokemonName, setPokemonName] = useState(null);
  const handleSubmit = (name) => setPokemonName(name);
  const handleSelect = (name) => setPokemonName(name);
  return (
    <div className='container'>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <PokemonSection pokemonName={pokemonName} onSelect={handleSelect} />
    </div>
  );
};

export default App;
