import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import db from "./api/db";

/*para borrar cuando hagas click en el icono, hay que bindear el evento con el ID y 
hacer un filter de ese ID en la lista de to do y removerlo del arreglo. */

const App = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState(db);
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
