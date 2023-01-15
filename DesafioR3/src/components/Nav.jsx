import React from "react";

const Nav = ({ title, onSearch, resetTodos }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    resetSearch();
  };

  const resetSearch = () => {
    setSearchTerm("");
  }

  return (
    <nav className="text-white p-3 rounded-bottom animate_animated animate_fadeInLeftBig d-flex justify-content-between">
      {title}
      <h3 className="center">Desafio Colaborador</h3>
      <form onSubmit={handleSubmit}>
        <input className="rounded"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="rounded" type="submit">Buscar</button>
        <button className="rounded" type="reset" onClick={resetTodos}>Reset</button>
      </form>
    </nav>
  );
};

export default Nav;