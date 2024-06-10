export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img src={sprites.other['official-artwork'].front_default} width="240" alt="pokemon-name" />

      <h2>{name}</h2>

      <ul>
        {stats.map(entry => (
          <li>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
