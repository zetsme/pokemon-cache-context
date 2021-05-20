import { createContext, useContext, useReducer } from 'react';

const pokemonCacheReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return { ...state, [action.pokemonName]: action.pokemonData };

    default:
      throw new Error(`Inhandled action type: ${action.type}`);
  }
};

const PokemonCacheContext = createContext();

export const PokemonCacheProvider = (props) => {
  const [cache, dispatch] = useReducer(pokemonCacheReducer, {});
  return <PokemonCacheContext.Provider value={{ cache, dispatch }} {...props} />;
};

export const usePokemonCache = () => {
  const context = useContext(PokemonCacheContext);
  if (!context) {
    throw new Error('usePokemonCache must be used in PokemonCacheProvider');
  }
  return context;
};
