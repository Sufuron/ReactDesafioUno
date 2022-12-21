const Header = (props) => {
  return (
    <nav className="text-center text-white p-3 rounded-bottom">
      {props.title}
    </nav>
  );
};

export default Header;
