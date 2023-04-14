import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <NavLink to="/messages">Messages</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
