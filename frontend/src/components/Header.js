import Header1Component from './helper/Header1component';
import Header2Component from './helper/Header2component';
import Slider from './Slider';
import styles from '../css/myfile.module.css';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('head');
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        header.classList.add(styles.sticky);
      } else {
        header.classList.remove(styles.sticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <div id="head">
        <Header1Component/> 
        <Header2Component/>
        {/* <Slider/> */}
      </div>
    );
  }
  
  export default Header;