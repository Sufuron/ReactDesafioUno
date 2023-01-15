import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import db from "./api/db";

const filterData = (data, searchTerm) =>
  data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [todos, setTodos] = useState([...db]);
  const [originalTodos, setOriginalTodos] = useState([...db]);

  const handleSearch = (searchTerm) => {
    setTodos(filterData(originalTodos, searchTerm));
  };

  const handleFormSubmit = (data) => {
    setTodos([...todos, data]);
    setOriginalTodos([...originalTodos, data]);
    setFormData({ name: "", email: "" });
  };

  const resetTodos = () => {
    setTodos(originalTodos);
  };
  return (
    <>
      <Nav title="React D3" onSearch={handleSearch} resetTodos={resetTodos} />
      <div className="bgdegre rounded m-5">
        <Header />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <Footer footertitle="Presiona el siguiente boton para ir al repositorio!" />
    </>
  );
};

export default App;
