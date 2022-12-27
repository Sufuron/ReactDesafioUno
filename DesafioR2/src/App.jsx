import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => {

  
  return (
    <>
      <Header title="Desafio 2 React => User + Pass + Button." />
      <Counter />
      <Footer footertitle="Presiona el siguiente boton para ir al repositorio!" />
    </>
  );
};

export default App;
