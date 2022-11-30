import React from "react";
import Hours from "./Hours";
import Map from "../LocationAndInfo/Map";

function Landing() {
    return (
      <div>
        <Hours/>
        <Map/>
        <br></br>
        ABOUT US
        <br></br>
        <p><a href="https://www.facebook.com/branchburgsbest">Today's Specials</a></p>
      </div>
      
    );
  }
  
  export default Landing;