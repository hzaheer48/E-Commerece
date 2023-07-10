import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import userPic1 from '../images/slider1.jpg';
import userPic2 from '../images/slider1.jpg';
import userPic3 from '../images/slider1.jpg';
import styles from '../css/myfile.module.css';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Web Developer',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus leo in tellus ultrices, eu fermentum odio finibus. Aenean malesuada elit sed enim blandit, eget efficitur ex laoreet.',
      image: userPic1,
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      comment: 'Pellentesque nec leo est. Morbi non enim eu erat varius consequat id at erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed laoreet tortor risus.',
      image: userPic2,
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'AAA',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'BBB',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'CCC',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
  ];

  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        setViewportSize('xs'); // Extra small devices (phones)
      } else if (windowWidth <= 768) {
        setViewportSize('sm'); // Small devices (tablets)
      } else if (windowWidth <= 992) {
        setViewportSize('md'); // Medium devices (landscape tablets)
      } else if (windowWidth <= 1200) {
        setViewportSize('lg'); // Large devices (desktops)
      } else if (windowWidth > 1200){
        setViewportSize('xl'); // Extra large devices (large desktops)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let carouselOptions = {};

  switch (viewportSize) {
    case 'xs':
    case 'sm':
      carouselOptions = {
        showArrows: false,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        centerMode: true,
        centerSlidePercentage: 100,
        transitionTime: 500,
        interval: 4000,
        selectedItem: 0,
      };
      break;

    default:
      carouselOptions = {
        showArrows: false,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        centerMode: true,
        centerSlidePercentage:33.33,
        transitionTime: 500,
        interval: 4000,
        selectedItem: 0,
      };
      break;
  }

  return (
    <div className={`container ${styles.testimonialSection}`}>
      <h2 className={`text-center ${styles.sectionTitle}`}>Customer Reviews</h2>
      <Carousel {...carouselOptions}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialItem}>
            <div className={styles.testimonialContent}>
              <img src={testimonial.image} alt="User" className={` ${styles.testimonialImage}`} />
              <div className={styles.testimonialText}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
                <p>{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
