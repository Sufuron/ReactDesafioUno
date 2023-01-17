import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [showStats, setShowStats] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm || searchTerm < 1 || searchTerm > 905) {
      alert("Ingresa el nombre o ID de un Pokemon entre 1 y 905!");
      return;
    }
    try {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowercaseSearchTerm}`
      );
      const data = await res.json();
      setPokemonData(data);
    } catch (error) {
      console.log(error);
      setPokemonData(null);
      alert(`Pokemon ${searchTerm} not found`);
    }
  };

  return (
    <div>
      <nav className="text-white p-3 rounded-bottom d-flex justify-content-between animate__animated animate__fadeInRightBig">
        <form onSubmit={handleSubmit}>
          <label className="gap-2">
            Pokemon Name:
            <input
              className="rounded p-1"
              type="text"
              value={searchTerm}
              placeholder={searchTerm ? "" : "Please enter a Pokemon"}
              onChange={(event) => setSearchTerm(event.target.value)}
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
            onClick={() => {
              setSearchTerm("");
              setPokemonData(null);
            }}
          >
            Reset
          </button>
        </form>
      </nav>
      {!searchTerm && (
        <p className="text-center bg-text text-white p-1 mt-1 animate__animated animate__fadeInRightBig">
          Bienvenido, Ingrese el ID o Nombre del Pokemon que quieres encontrar.
        </p>
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
