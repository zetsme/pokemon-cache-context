const PokemonDataView = ({ pokemon }) => {
  return (
    <div className='pokemon__info'>
      <h5>
        <span className='pokemon__number'>{pokemon.id}</span> -{' '}
        <span className='pokemon__name'>{pokemon.name}</span>
      </h5>
      <img
        className='pokemon__image'
        src={pokemon.img || '/img/fallback-pokemon.jpg'}
        alt={pokemon.name}
      />
      <figure>
        <figcaption>Types :</figcaption>
        <ul className='pokemon__list'>
          {pokemon.types.map((type, index) => (
            <li className='pokemon__badge' key={index}>
              {type}
            </li>
          ))}
        </ul>
      </figure>
      <hr />
      <figure>
        <figcaption>Abilities :</figcaption>
        <ul className='pokemon__list'>
          {pokemon.abilities.map((ability, index) => (
            <li className='pokemon__badge' key={index}>
              {ability}
            </li>
          ))}
        </ul>
      </figure>
    </div>
  );
};

export default PokemonDataView;
