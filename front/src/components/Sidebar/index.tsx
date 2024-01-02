import { Outlet } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="navbar-element__header">
          <h1>Library</h1>
        </li>
        <li className="navbar-element">
          <h3><a href="/">Books</a></h3>
        </li>
        <li className="navbar-element">
          <h3><a href="/authors">Authors</a></h3>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
