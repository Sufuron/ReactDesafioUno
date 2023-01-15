import { useState } from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import db from "./api/db";

const App = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([...db]);

  const handleSearch = (searchTerm) => {
    setTodos(todos.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  return (
    <>
      <Nav title="React D3" onSearch={handleSearch} />
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