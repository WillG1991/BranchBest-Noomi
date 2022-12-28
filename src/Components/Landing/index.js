import React from "react";
import Hours from "./Hours";
import Map from "../LocationAndInfo/Map";
import AboutUs from "./AboutUs";
import BBLogo from '../../Images/Logo.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Landing() {
    return (
      <div>
        <div>
        <Fade right>
  <img
  className="landingLogo"
  style={{
    height: '400px',
    width: '400px',
  }}  src={BBLogo}  alt="Logo"/>
  </Fade>
          </div>
          <br></br>
          <br></br>
          <Fade left>
          <p><a 
          className="landingSpecialsLink"
          href="https://www.facebook.com/branchburgsbest">Today's Specials</a></p>
</Fade>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className="landingGrid" item xs={6}>
        <Rotate top left>
          <Item 
          className="landingItem">
            <Hours/>
            </Item>
            </Rotate>
        </Grid>
        <Grid className="landingGrid" item xs={6}>
        <Rotate top right>
        <Item className="landingItem">
        <AboutUs/>
        </Item>
        </Rotate>
        </Grid>
      </Grid>
    </Box>
       
   
        <Map/>
       
      </div>
      
    );
  }
  
  export default Landing;