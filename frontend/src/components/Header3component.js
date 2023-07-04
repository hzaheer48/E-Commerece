import styles from '../css/myfile.module.css';
const Header3Component = (props) => {
  return (
    <header className={`text-white py-3 ${styles.header}`}>
      <div className="container">
        <nav className="d-flex justify-content-center navbar navbar-expand navbar-dark">
          <div>
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
