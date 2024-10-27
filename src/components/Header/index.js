import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <h1>Website logo</h1>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
