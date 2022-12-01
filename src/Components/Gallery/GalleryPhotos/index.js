import React from "react";
import Carousel from 'better-react-carousel'


function GalleryPhotos() {
    return (
      <Carousel className="imageSmall" cols={2} rows={2} gap={10} loop>
      <Carousel.Item >
        <img width="30%" src="https://picsum.photos/800/600?random=1" alt="image111" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=2" alt="image222"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=3"alt="image333"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=4"alt="image333"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=5"alt="image333"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=6"alt="image333"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://picsum.photos/800/600?random=7"alt="image333"/>
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
      
    );
  }
  
  export default GalleryPhotos;
  