import React from "react";

const Nav = ({ title, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="text-center text-white p-3 rounded-bottom animate__animated animate__fadeInLeftBig d-flex justify-content-between">
      {title}
      <h3>Desafio Colaborador</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Nav;
