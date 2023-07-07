import styles from '../../css/myfile.module.css';
import { MDBContainer } from 'mdb-react-ui-kit';
const Header3Component = () => {
  return (
    <header className={`text-white py-3 ${styles.header} ${styles.mover}`}>
      <MDBContainer className="">
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
      </MDBContainer>
    </header>
  );
};

export default Header3Component;
