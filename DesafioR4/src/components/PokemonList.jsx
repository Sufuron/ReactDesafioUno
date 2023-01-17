import React, { useState, useEffect } from "react";
import Card from "./Card";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [maxPokemon, setMaxPokemon] = useState(900);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`
        );
        const data = await res.json();
        setPokemonData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [offset]);

  const handleNextClick = () => {
    if (offset + 12 <= maxPokemon) {
      setOffset(offset + 12);
      setMaxPokemon(900);
    }
  };

  const handlePreviousClick = () => {
    if (offset - 12 >= 0) {
      setOffset(offset - 12);
    }
  };

  return (
    <div>
      <div
        className="pokemon-list"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {pokemonData.map((pokemon) => {
          const id = pokemon.url.match(/\/(\d+)\/$/)[1];
          return (
            <Card
              key={pokemon.name}
              title={pokemon.name}
              imageSource={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              description={`ID: ${id}`}
              url={pokemon.url}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handlePreviousClick}
        >
          Previous
        </button>
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
