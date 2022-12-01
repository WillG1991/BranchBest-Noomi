import React from "react";
import Menu1 from '../../../Images/MenuPicOne.png'
import Menu2 from '../../../Images/MenuPicTwo.png'

function MenuImage() {
    return (
 <div className="map" align="center">
        <img className="mapImage" src={Menu1} alt="MenuImage" />
        <img className="mapImage" src={Menu2} alt="MenuImage" />
      </div>
      
    );
  }
  
  export default MenuImage;