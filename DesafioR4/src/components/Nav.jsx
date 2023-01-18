import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm || searchTerm < 1 || searchTerm > 905) {
      alert("Ingresa el nombre o ID de un Pokemon entre 1 y 905!");
      return;
    }
    setLoading(true);
    setPokemonData(null);
    try {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowercaseSearchTerm}`
      );
      const data = await res.json();
      setPokemonData(data);
    } catch (error) {
      console.log(error);
      alert(`Pokemon ${searchTerm} not found`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav className="text-white p-3 rounded-bottom d-flex justify-content-between animate__animated animate__fadeInRightBig">
        <form onSubmit={handleSubmit}>
          <label className="text-center">
            Nombre del Pokemon:
            <input
              className="rounded m-1 p-1"
              type="text"
              value={searchTerm}
              placeholder={searchTerm ? "" : "Encuentra tu Pokemon!"}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
          <button
            className="btn btn-outline-secondary m-1 text-decoration-none text-white"
            type="submit"
          >
            Buscar
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
          loading={loading}
        />
      )}
    </div>
  );
}

export default Nav;
