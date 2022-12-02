import React from "react";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import 'bootstrap/dist/css/bootstrap.css';

function Address() {
    return (
      <>
      <br></br>
  <br></br>
      <div  className="locationContactInfo">
       {/* --------PHONE NUMBER START--------  */}
       <div class="container">
  <div  class="row">
    <div class="col-12">
    <CallIcon className="address_icons"/>
    </div>
    <div >
    <h4>(908) 255-4075 </h4>
    </div>
  </div>
</div>
  {/* --------PHONE NUMBER END --------  */}
  <br></br>
  <br></br>
  {/* --------ADDRESS START --------  */}
<div align="center" class="container">
  <div class="row">
    <div class="col-12">
    < LocationOnIcon className="address_icons"/>
    </div>
    <div >
    <h4> 1165 US-202 <br></br> Branchburg, NJ 08853</h4>
    </div>
  </div>
</div>
 {/* --------ADDRESS END --------  */}
 <br></br>
 <br></br>
  {/* --------EMAIL START --------  */}
<div align="center" class="container">
  <div class="row">
    <div class="col-">
    <EmailIcon className="address_icons"/>
    </div>
    <div >
    <h4>Branchburgsbest@gmail.com</h4>
    </div>
  </div>
</div>
 {/* --------EMAIL END --------  */}
 </div>
</>
      
    );
  }
  
  export default Address;