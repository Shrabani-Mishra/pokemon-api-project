
export const PokemonCard = ({ PokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={PokemonData.sprites.other.dream_world.front_default}
          alt={PokemonData.name}
          className="pokemon-image"
        />
      </figure>

      <h1 className="pokemon-name">{PokemonData.name}</h1>

      <div className="pokemon-types">
        <p>
          {PokemonData.types
            .map((curtype) => curtype.type.name)
            .join(", ")}
        </p>
      </div>

      <div>
        <p>
          <span>Height:</span> {PokemonData.height}
        </p>

        <p>
          <span>Weight:</span> {PokemonData.weight}
        </p>

        <p>
          <span>Attack:</span>{" "}
          {PokemonData.stats.find(
            (stat) => stat.stat.name === "attack"
          ).base_stat}
        </p>

        <p>
          <span>Speed:</span>{" "}
          {PokemonData.stats.find(
            (stat) => stat.stat.name === "speed"
          ).base_stat}
        </p>

        <p>
          <span>Abilities:</span>{" "}
          {PokemonData.abilities
            .map((abilityInfo) => abilityInfo.ability.name).slice(0,1)
            .join(", ")}
        </p>
      </div>
    </li>
  );
};


