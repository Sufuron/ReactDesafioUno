import React from "react";

const typesColors = {
  normal: "linear-gradient(#A4A4A4, #D3D3D3)",
  fight: "linear-gradient(#5A0303, #8C0202)",
  fire: "linear-gradient(#ff0000, #ff6600)",
  flying: "linear-gradient(#1F838B, #8FB5CC)",
  poison: "linear-gradient(#B86AAA, #E6A9D2)",
  water: "linear-gradient(#0000ff, #0066ff)",
  grass: "linear-gradient(#00ff00, #00cc00)",
  electric: "linear-gradient(#FFFF00, #FFFF66)",
  ground: "linear-gradient(#6B4C00, #9E7D00)",
  psychic: "linear-gradient(#F662D8, #F777D9)",
  rock: "linear-gradient(#B2A171, #D9C5A2)",
  ice: "linear-gradient(#3CB3E9, #79D6F2)",
  bug: "linear-gradient(#A8B822, #C9D44B)",
  dragon: "linear-gradient(#00F5F5, #66FFFF)",
  ghost: "linear-gradient(#7B62A3, #9B86C0)",
  dark: "linear-gradient(#6F5858, #92817A)",
  steel: "linear-gradient(#B8B8D0, #D9D9E2)",
  fairy: "linear-gradient(#EBA8C3, #F9D1D8)",
};

const PokemonCard = ({ pokemonData, showStats, setShowStats }) => {
    const typeColor = pokemonData && typesColors[pokemonData.types[0].type.name];
    return (
      <div>
        {pokemonData && (
          <div className="card-container" style={{ background: typeColor }}>
            <div className="card">
              <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
              <h2>{pokemonData.name}</h2>
              <p>Altura: {(pokemonData.height / 10).toFixed(2)} m</p>
              <p>Peso: {(pokemonData.weight / 10).toFixed(2)} kg</p>
              <button className="rounded mb-2" onClick={() => setShowStats(!showStats)}>
                {showStats ? "Hide Stats" : "Show Stats"}
              </button>
              {showStats && (
                <div>
                  <h3 className="text-center">Stats</h3>
                  <ul>
                    {pokemonData.stats.map((stat) => (
                      <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default PokemonCard;