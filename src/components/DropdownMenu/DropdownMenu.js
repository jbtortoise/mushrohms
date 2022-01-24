import "./DropdownMenu.css";

function DropdownMenu(props) {
  const isActive = props.text === props.activeMenu;

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick(props.text);
  };

  return (
    <div className="menu-container">
      <div className="menu-trigger-container">
        <div onClick={handleClick} className="menu-trigger">
          <span className={`link-text ${isActive ? "active" : "inactive"}`}>
            {props.text}
          </span>
          <div>
            <i className="fas fa-xs fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <nav className={`menu ${isActive ? "active" : "inactive"}`}>
        <ul>
          {props.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                <span className="link-text menu-item-text">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DropdownMenu;
