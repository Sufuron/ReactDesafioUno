import React from "react";
import PokemonList from "./components/PokemonList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-12 d-flex justify-content-center">
          <Nav />
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="text-center animate__animated animate__fadeInLeftBig rounded bg-text w-100 text-white mt-2 d-flex justify-content-center">
            Pokemon List
          </h1>
        </div>
        <PokemonList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
