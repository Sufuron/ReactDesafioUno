import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React + Vite" />
      <Cards />
      <Footer
        footertitle="Sabemos que te gustan los animales, presiona
        el boton de cual te gustaria saber mas!"
      />
    </>
  );
}

export default App;
