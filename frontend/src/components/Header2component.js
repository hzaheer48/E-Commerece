import styles from '../myfile.module.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header2Component = () => {
  return (
    <header className={`py-3 ${styles.header}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-start align-items-center">
            <div className={`d-flex align-items-center ${styles.searchContainer}`}>
              <FaSearch className={styles.searchIcon} />
              <input type="text" className={`${styles.searchInput}`} placeholder="Search" />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2 className={styles.storeName}>Your Store Name</h2>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center p-2">
            <FaUser className={styles.userIcon} />
            <span className={styles.userName}>Admin</span>
            <FaShoppingCart className={styles.cartIcon} />
            <span className={styles.userName}>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2Component;
