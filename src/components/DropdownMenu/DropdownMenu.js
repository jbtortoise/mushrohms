import "./DropdownMenu.css";
import { useState, useRef } from "react";

function DropdownMenu(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <div onClick={onClick} className="menu-trigger">
        <span className={`link-text ${isActive ? "active" : "inactive"}`}>
          {props.text}
        </span>
      </div>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
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
