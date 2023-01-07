import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Nav title="Desafio React => To Do List." />

      <div className="bgdegre rounded m-5">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          email={email}
          setEmail={setEmail}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <Footer footertitle="Presiona el siguiente boton para ir al repositorio!" />
    </>
  );
};

export default App;
