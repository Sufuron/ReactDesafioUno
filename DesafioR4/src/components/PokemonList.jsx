import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../index.css";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [maxPokemon, setMaxPokemon] = useState(900);
  const [sortOrder, setSortOrder] = useState("asc");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=16`
        );
        const data = await res.json();
        setPokemonData(data.results);
        setOriginalData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [offset]);

  const handleNextClick = () => {
    if (offset + 16 <= maxPokemon) {
      setOffset(offset + 16);
      setMaxPokemon(905);
    }
  };

  const handlePreviousClick = () => {
    if (offset - 16 >= 0) {
      setOffset(offset - 16);
    }
  };

  const handleSort = () => {
    let sortedPokemons = [...pokemonData];
    if (sortOrder === "asc") {
      setSortOrder("desc");
      sortedPokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      setSortOrder("asc");
      sortedPokemons.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    setPokemonData(sortedPokemons);
  };

  const handleReset = () => {
    setPokemonData(originalData);
  };

  return (
    <div>
      <div className="d-flex justify-content-center animate__animated animate__fadeInRightBig">
        <p className="p-b text-white">Ordenar por orden alfabetico:</p>
        <button className="bg-button" onClick={handleSort}>
          Presiona Aquí
        </button>
        <button className="bg-button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="pokemon-list">
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
          Anterior
        </button>
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handleNextClick}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
