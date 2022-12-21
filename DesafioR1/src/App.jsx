import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />

      <Cards />

      <Footer footertitle="Breve descripción de galería de imágenes" />
    </>
  );
}

export default App;
