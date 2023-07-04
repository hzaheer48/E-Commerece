import styles from "../css/myfile.module.css";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";
import Header3Component from "../components/Header3component";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Header2Component = (props) => {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);

  useEffect(() => {
    setExpanded(width <= 768);
  }, [width]);

  const handleToggleClick = () => {
    setHamburgerButton(!hamburgerButton);
  };

  return (
    <div>
      <header className={`py-3 ${styles.header}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-2 col-12 col-md-4">
              <div className="row">
                <div className="mt-1 col-1">
                  {isExpanded && (
                    <button
                      className={`navbar-toggler ${styles.navbarToggler}`}
                      type="button"
                      onClick={handleToggleClick}
                    >
                      {hamburgerButton ? <FaBars /> : <FaRegWindowClose />}
                    </button>
                  )}
                </div>
                <div className="col">
                  <div className={`${styles.searchContainer}`}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                      type="text"
                      className={`${styles.searchInput}`}
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2 d-flex justify-content-center col-6 col-md-4">
              <h2 className={styles.storeName}>Your Store Name</h2>
            </div>
            <div className="d-flex justify-content-center col-6 ml-xs-auto col-md-4">
              <FaUser className={styles.userIcon} />
              <span className="m-1 p-1">Admin</span>
              <FaShoppingCart className={styles.cartIcon} />
              <span className="m-1 p-1">Cart</span>
            </div>
          </div>
        </div>
      </header>
      {(isExpanded && !hamburgerButton && <Header3Component />) || (!isExpanded && <Header3Component />)}
    </div>
  );
};

export default Header2Component;
