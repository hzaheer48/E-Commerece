import React, { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import Card1Component from '../components/helper/Card1Component';

export default function Gallery() {
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
      } else {
        setViewportSize('xl'); // Extra large devices (large desktops)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let numCols = 4;
  let cardComponents = [];
  let cardWidth = '100%';

  switch (viewportSize) {
    case 'xs':
      numCols = 1;
      cardWidth = '100%';
      break;
    case 'sm':
    case 'md':
    case 'lg':
      numCols = 3;
      cardWidth = '50%';
      break;
    default:
      numCols = 4;
      cardWidth = '25%';
      break;
  }

  const totalComponents = 5;
  const isSingleComponent = cardComponents.length === 1;

  for (let i = 0; i < totalComponents; i++) {
    cardComponents.push(
      <Carousel.Item key={i}>
        <Card1Component width={cardWidth} />
      </Carousel.Item>
    );
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <Carousel cols={numCols} rows={1} gap={10} loop>
        {isSingleComponent ? (
          <Carousel.Item>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {cardComponents}
            </div>
          </Carousel.Item>
        ) : (
          cardComponents
        )}
      </Carousel>
    </div>
  );
}
