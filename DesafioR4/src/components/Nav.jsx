import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm) {
      alert("Please enter a Pokemon name to search");
      return;
    }
    if (searchTerm < 1 || searchTerm > 900) {
      alert("Please enter a value between 1 and 900");
      return;
    }
    try {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowercaseSearchTerm}`
      );
      if (res.status === 404) {
        setPokemonData(null);
        alert(`Pokemon ${searchTerm} not found`);
      } else {
        const data = await res.json();
        setPokemonData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setPokemonData(null);
    setShowPlaceholder(true);
  };

  return (
    <div>
      <nav className="text-white p-3 rounded-bottom d-flex justify-content-between">
        <form onSubmit={handleSubmit}>
          <label className="gap-2">
            Pokemon Name:
            <input
              className="rounded p-1"
              type="text"
              value={searchTerm}
              placeholder={showPlaceholder ? "Please enter a Pokemon" : ""}
              onChange={(event) => setSearchTerm(event.target.value)}
              onFocus={() => setShowPlaceholder(false)}
              onBlur={() => setShowPlaceholder(!searchTerm)}
            />
          </label>
          <button
            className="btn btn-outline-secondary m-1 text-decoration-none text-white"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-outline-secondary text-decoration-none text-white"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </nav>
      {searchTerm.length === 0 && (
        <p className="text-center bg-text text-white p-1 mt-1">Bienvenido, Ingrese el ID o Nombre del Pokemon que quieres encontrar.</p>
      )}
      {pokemonData && (
        <PokemonCard
          pokemonData={pokemonData}
          showStats={showStats}
          setShowStats={setShowStats}
        />
      )}
    </div>
  );
}

export default Nav;
