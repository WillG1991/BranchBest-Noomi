import React from "react";
import Hours from "./Hours";
import Map from "../LocationAndInfo/Map";
import AboutUs from "./AboutUs";

function Landing() {
    return (
      <div>
        <Hours/>
        <Map/>
        <br></br>
        <AboutUs/>
        <br></br>
        <p><a href="https://www.facebook.com/branchburgsbest">Today's Specials</a></p>
      </div>
      
    );
  }
  
  export default Landing;