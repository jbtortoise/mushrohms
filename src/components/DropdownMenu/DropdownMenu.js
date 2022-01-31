import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const renderLinkComponent = (link) => {
  const inside = <span className="link-text menu-item-text">{link.text}</span>;
  if (link.href.startsWith("/#")) {
    return <HashLink to={link.href}>{inside}</HashLink>;
  } else if (link.href.startsWith("/")) {
    return <Link to={link.href}>{inside}</Link>;
  } else {
    return (
      <a href={link.href} target="_blank" rel="noreferrer">
        {inside}
      </a>
    );
  }
};

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
            <li key={link.href}>{renderLinkComponent(link)}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DropdownMenu;
