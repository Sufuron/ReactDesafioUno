import React, { useState, useEffect } from "react";
import typesColors from "./typeColors";

const PokemonCard = ({ pokemonData, showStats, setShowStats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const typeColor = pokemonData && typesColors[pokemonData.types[0].type.name];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 250);
    if (pokemonData) {
      setShowStats(false);
    }
  }, [pokemonData]);

  return (
    <div>
      {loading && (
        <p className="text-center text-white m-1 bg-text p-1">Buscando...</p>
      )}
      {pokemonData && (
        <div
          className={`card-pokemon-search animate__animated animate__fadeIn ${
            isVisible ? "animate__fadeIn" : ""
          }`}
          style={{ background: typeColor }}
        >
          <div className="card-nav bg-text text-white p-4">
            <img
              className="card-img-top-nav"
              src={pokemonData.sprites.front_shiny}
              alt={pokemonData.name}
            />
            <h2>{pokemonData.name}</h2>
            <p>Altura: {(pokemonData.height / 10).toFixed(2)} m</p>
            <p>Peso: {(pokemonData.weight / 10).toFixed(2)} kg</p>
            <p>Tipo: {pokemonData.types[0].type.name}</p>
            <button
              className="btn btn-outline-secondary mb-2 text-decoration-none text-white"
              onClick={() => setShowStats(!showStats)}
            >
              {showStats ? "Hide Stats" : "Show Stats"}
            </button>
            {showStats && (
              <div className="text-center m-3">
                <h3>Estadisticas</h3>
                {pokemonData.stats.map((stat) => (
                  <p key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default PokemonCard;
