import React from 'react'
import Carousel from 'react-grid-carousel'
import Card1Component from '../components/helper/Card1Component' 

export default function Gallery(){
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <Card1Component/>
      </Carousel.Item>
      <Carousel.Item>
      <Card1Component/>
      </Carousel.Item>
      <Carousel.Item>
      <Card1Component/>
      </Carousel.Item>
    </Carousel>
  )
}