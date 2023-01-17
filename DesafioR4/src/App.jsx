import React from "react";
import PokemonList from "./components/PokemonList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PokemonCard from "./components/PokemonCard";

function App() {
return (
<div className="App">
<div className="container">
<div className="row">
<div className="col-12 d-flex justify-content-center">
<Nav />
<PokemonCard />
</div>
<div className="col-12">
<h1 className="text-center">Pokemon List</h1>
<PokemonList />
</div>
</div>
</div>
<Footer />
</div>
);
}

export default App;
