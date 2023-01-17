import React, { useState, useEffect } from "react";

const Card = ({ title, imageSource, description, url }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="card bg-dark text-white animate__animated animate__bounceIn">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
        <p className="card-text text-secondary text-white">{description}</p>
        <p className="card-text text-secondary text-white">Peso: {(pokemonData.weight / 10).toFixed(2)} kg</p>
        <p className="card-text text-secondary text-white">Altura: {(pokemonData.height / 10).toFixed(2)} m</p>
        <div className="text-center">
          <button className="btn btn-outline-secondary">
            <a
              className="text-decoration-none text-white"
              href={`https://pokeapi.co/api/v2/pokemon/${title}`}
              target="_blank"
            >
              Ver mas
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
