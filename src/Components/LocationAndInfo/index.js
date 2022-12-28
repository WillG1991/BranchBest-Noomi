import React from "react";
import Address from "./Address";
import Delivery from "./Delivery";
import Directions from "./Directions";
import Hours from "./Hours";
import Map from "./Map";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "../../App.css";
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LocationAndInfo() {
    return (
      <>
      <h3 align="center">Get in touch with us:</h3>
      <Container>
      <Flip top>
      <Address/>
      </Flip>
      <Map/>
      <Zoom>
      <Item className="locationInfoDirections">
      <Directions/>
      </Item>
      </Zoom>
      <div>
      <Grid className="footer" container spacing={2}>
        <Grid item xs={6}>
        <Rotate top left>
          <Item className="locationAndInfo">
          <Hours/>
            </Item>
            </Rotate>
        </Grid>
        <Grid item xs={6}>
        <Rotate top right>
          <Item className="locationAndInfo">
          <Delivery/>
            </Item>
            </Rotate>
        </Grid>
      </Grid>
      
      </div>
     
</Container>
</>
    );
  }
  
  export default LocationAndInfo;