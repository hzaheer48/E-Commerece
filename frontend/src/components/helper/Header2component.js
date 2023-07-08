import styles from "../../css/myfile.module.css";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import Header3Component from "./Header3component";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const Header2Component = (props) => {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [rotateButtons, setRotateButtons] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const rotate = rotateButtons ? "rotate(360deg)" : "rotate(0)"
  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //     const isTop = scrollTop === 0;
  //     setIsAtTop(isTop);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleToggleClick = () => {
    setRotateButtons(!rotateButtons);
    setHamburgerButton(!hamburgerButton);
  };

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
                      style={{ transform: rotate, transition: "all 0.3s linear" }}
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
            <MDBCol md='4' className="mb-2 d-flex justify-content-center col-6">
              <h2 className={styles.storeName}>Your Store Name</h2>
            </MDBCol>
            <MDBCol md="4" className="d-flex justify-content-center ml-xs-auto col-6 mt-1">
              <FaUser className={styles.userIcon} />
              <span className="m-1 p-1">Admin</span>
              <FaShoppingCart className={styles.cartIcon} />
              <span className="m-1 p-1">Cart</span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
      {(isExpanded && !hamburgerButton && <Header3Component />) || (!isExpanded && <Header3Component/>)}

    </div>
  );
};

export default Header2Component;
