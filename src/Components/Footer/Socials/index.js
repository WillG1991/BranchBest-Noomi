import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

function Socials() {
    return (
      <div>
        Come check us out on:
        <br></br>
        <Link href="https://www.facebook.com/branchburgsbestnj/" >
        <FacebookIcon
        fontSize="large" href="facebook.com"/>
        </Link>
        <Link href="https://www.instagram.com/branchburgsbest/?hl=en" >
        <InstagramIcon
        fontSize="large"/>
        </Link>
      </div>
    );
  }
  
  export default Socials;