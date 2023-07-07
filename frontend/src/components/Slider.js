import React from 'react';
import styles from '../css/myfile.module.css'; 
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'

function Slider(){
    return(
        <div className={`${styles.carousel_container}`}>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={true} stopOnHover={false} infiniteLoop={true} autoPlay={true} swipeable={true} dynamicHeight={true} interval={2000}>
        <div>
            <img src={slider1} className={`${styles.carousel_img}`}/>
        </div>
        <div>
            <img src={slider2}  className={`${styles.carousel_img}`} />
        </div>
        <div>
            <img src={slider3}   className={`${styles.carousel_img}`}/>
        </div>
    </Carousel>
        </div>
        
    )
}
export default Slider