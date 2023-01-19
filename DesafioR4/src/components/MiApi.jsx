import { useState, useEffect } from "react";
import Card from "./Card";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [originalData, setOriginalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemons = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${
            (page - 1) * 100
          }&limit=100`
        );
        const data = await res.json();
        setPokemonData(data.results);
        setOriginalData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleNextClick = () => {
    if (page < 8) {
      setPage(page + 1);
    }
  };

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
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
      <div className="d-flex justify-content-center">
        <input
          className="search-input rounded p-1"
          type="text"
          placeholder="Encuentra tu Pokemon!"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <div className="d-flex justify-content-center animate__animated animate__fadeInRightBig">
        <p className="p-b text-white">Ordenar por orden alfabetico:</p>
        <button className="bg-button" onClick={handleSort}>
          Presiona Aquí
        </button>
        <button className="bg-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handlePreviousClick}
          disabled={page === 1}
        >
          Anterior
        </button>
        <p className="m-1 p-1 text-white bg-text">Page {page} of 8</p>
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handleNextClick}
          disabled={page === 8}
        >
          Siguiente
        </button>
      </div>

      <div className="pokemon-list">
        {filteredPokemons.map((pokemon) => {
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
          disabled={page === 1}
        >
          Anterior
        </button>
        <p className="m-1 p-1 text-white bg-text">Page {page} of 8</p>
        <button
          className="btn bg-text m-1 text-decoration-none text-white"
          onClick={handleNextClick}
          disabled={page === 8}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
