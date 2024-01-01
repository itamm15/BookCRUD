import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-element__header">
        <h1>Library</h1>
      </li>
      <li className="navbar-element">
        <h3>Books</h3>
      </li>
      <li className="navbar-element">
        <h3>Authors</h3>
      </li>
    </ul>
  );
};

export default Sidebar;
