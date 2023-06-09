const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <a className="nav__item" href="/chat">
          Chat
        </a>
        <a className="nav__item" href="/mlinar">
          Mlinar
        </a>
        <a className="nav__item" href="/teorem">
          Teorem
        </a>
        <a className="nav__item" href="/todo">
          To-Do List
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
