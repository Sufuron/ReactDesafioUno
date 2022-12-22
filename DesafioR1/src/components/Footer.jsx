const Footer = (props) => {
  return (
    <>
      <footer className="text-white p-3 text-center rounded-top mt-2">
        {props.footertitle} <br />
        <div className="text-center">
          <button className="btn btn-outline-secondary m-2 text-decoration-none text-white">
            <a
              className="text-decoration-none text-white"
              href="https://www.zooplus.es/magazine/aves/razas-de-pajaros"
              target="_blank"
            >
              Pajaros
            </a>
          </button>
          <button className="btn btn-outline-secondary m-2 text-decoration-none text-white">
            <a
              className="text-decoration-none text-white"
              href="https://www.hogarmania.com/mascotas/perros/razas/"
              target="_blank"
            >
              Perros
            </a>
          </button>
          <button className="btn btn-outline-secondary m-2">
            <a
              className="text-decoration-none text-white"
              href="https://tiposdeaves.com/tipos-de-cisnes/"
              target="_blank"
            >
              Cisnes
            </a>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
