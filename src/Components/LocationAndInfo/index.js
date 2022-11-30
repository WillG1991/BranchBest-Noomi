import React from "react";
import Address from "./Address";
import Delivery from "./Delivery";
import Directions from "./Directions";
import Hours from "./Hours";
import Map from "./Map";
import { Container } from "@mui/system";

function LocationAndInfo() {
    return (
      <Container>
      <Address/>
      <Map/>
      <Directions/>
      <div>
      <Delivery/>
      <Hours/>
      </div>
     
</Container>
    );
  }
  
  export default LocationAndInfo;