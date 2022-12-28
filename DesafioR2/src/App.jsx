import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {

  
  return (
    <>
      <Header title="Desafio 2 React => User + Pass + Button." />
      <Login />
      <Footer footertitle="Presiona el siguiente boton para ir al repositorio!" />
    </>
  );
};

export default App;
