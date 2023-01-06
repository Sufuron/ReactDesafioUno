const Form = () => {
  return (
    <>
      <main className="text-center p-5 m-5 rounded bgdegre text-white animate__animated animate__bounceIn">
        <form action="">
          <input
            className="mb-2 rounded text-center"
            type="text"
            placeholder="Ingrese Nombre"
          />
          <br />
          <input className="rounded text-center" type="text" placeholder="Ingrese Email" />
          <br />
          <button
            className="btn btn-outline-secondary mt-3 text-decoration-none text-white"
            type="submit"
          >
            Agregar colaborador
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
