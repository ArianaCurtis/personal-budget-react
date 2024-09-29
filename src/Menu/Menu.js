import {
  Link,
} from "react-router-dom";

function Menu() {
  return (
<nav role="menubar">
        <ul>
            <li><Link role="menuitem" to="/">Home</Link></li>
            <li><Link role="menuitem" to="/about">About</Link></li>
            <li><Link role="menuitem" to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
