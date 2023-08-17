import React, { useEffect, useState, useRef } from "react";
import styles from "../../css/myfile.module.css";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Header3Component from "./Header3component";
import CartComp from "../actual/CartComp";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header2Component = () => {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [rotateButtons, setRotateButtons] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? "auto" : "hidden";
  };

  const handleToggleClick = () => {
    setRotateButtons(!rotateButtons);
    setHamburgerButton(!hamburgerButton);
  };
  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width]);
  
  return (
    <div>
      <header className={`py-3 ${styles.header}`}>
        <MDBContainer className="">
          <MDBRow className="align-items-center">
            <MDBCol md='4' className="mb-2">
              <MDBRow className="">
                <MDBCol className="mt-1 col-2 d-flex justify-content-end">
                  {isExpanded && (
                    <button
                      className={`${styles.navbarToggler}`}
                      type="button"
                      onClick={handleToggleClick}
                      style={{ transform: rotateButtons ? "rotate(360deg)" : "rotate(0)", transition: "all 0.3s linear" }}
                    >
                      {hamburgerButton ? <MDBIcon class="fas fa-align-justify"/> :  <MDBIcon class="fas fa-times"/>}
                    </button>
                  )}
                </MDBCol>
                <MDBCol className="col">
                  <div className={`${styles.searchContainer}`}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                      type="text"
                      className={`${styles.searchInput}`}
                      placeholder="Search"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md='4' className="mb-2 d-flex justify-content-center col-6" >
              <h2 className={styles.storeName}>Your Store Name</h2>
            </MDBCol>
            <MDBCol md="4" className="d-flex justify-content-center ml-xs-auto col-6 mt-1">
              <FaUser className={styles.userIcon} />
              <span className="m-1 p-1">Admin</span>
              <FaShoppingCart
                className={styles.cartIcon}
                onClick={handleCartClick} // Add onClick handler for cart button
              />
              <span
                className={`m-1 p-1 ${styles.cartText}`} // Add custom style for cart text
                onClick={handleCartClick} // Add onClick handler for cart text
              >
                Cart
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
      {(isExpanded && !hamburgerButton && <Header3Component />) || (!isExpanded && <Header3Component/>)}
      {isCartOpen && <CartComp onClose={handleCartClick}/>}

    </div>
  );
};

export default Header2Component;
