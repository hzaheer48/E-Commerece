import styles from '../myfile.module.css';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header3Component = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`text-white py-3 ${styles.header}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className={`navbar-toggler ${styles.navbarToggler}`}
            type="button"
            onClick={handleMenuToggle}
          >
            <FaBars />
          </button>
          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#" className={`nav-link text-white ${styles.navLink}`}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link text-white ${styles.navLink}`}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link text-white ${styles.navLink}`}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className={`nav-link text-white ${styles.navLink}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header3Component;
