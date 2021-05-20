import { Fragment, useEffect, useState } from 'react';
import { getRandomNames } from '../api';

const PokemonForm = ({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || '',
  onSubmit,
}) => {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);
  useEffect(() => {
    if (typeof externalPokemonName === 'string') {
      setPokemonName(externalPokemonName);
    }
  }, [externalPokemonName]);

  const handleChange = (e) => setPokemonName(e.target.value.toLowerCase());
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pokemonName);
  };
  const handleSelect = (name) => {
    setPokemonName(name);
    onSubmit(name);
  };
  const [btns, setBtns] = useState([]);
  useEffect(() => {
    changeNames();
  }, []);
  const changeNames = () => {
    getRandomNames().then(({ results }) => setBtns(results));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__title'>
        <label htmlFor='pokemonNameInput'>Pokemon Name</label>
        {btns && (
          <small className='form__btns'>
            Try{''}
            {btns.map((btn, index) => (
              <Fragment key={index}>
                <button type='button' onClick={() => handleSelect(btn.name)}>
                  {btn.name}
                </button>
                {index === btns.length - 1 ? '' : index === btns.length - 2 ? ' or' : ' ,'}
              </Fragment>
            ))}
          </small>
        )}
        <button className='form__submitBtn' onClick={changeNames} type='button'>
          Change random Names
        </button>
      </div>
      <div className='form__action'>
        <input
          className='form__input'
          id='pokemonNameInput'
          type='text'
          placeholder='Pokemon Name....'
          value={pokemonName}
          onChange={handleChange}
        />
        <button className='form__submitBtn' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default PokemonForm;
