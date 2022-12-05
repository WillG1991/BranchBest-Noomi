import React from "react";
import Menu1 from '../../../Images/MenuPicOne.png'
import Menu2 from '../../../Images/MenuPicTwo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function MenuImage() {
    return (
 <div className="map" align="center">
  <Carousel responsive={responsive}>
  <img className="mapImage" src={Menu1} alt="MenuImage" />
  <div><br></br></div>
  <div><br></br></div>
  <img className="mapImage" src={Menu2} alt="MenuImage" />
  <div><br></br></div>
  <div><br></br></div>
 
</Carousel>
      </div>
      
    );
  }
  
  export default MenuImage;