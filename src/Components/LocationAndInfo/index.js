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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LocationAndInfo() {
    return (
      <Container>
      <Address/>
      <Map/>
      <Item>
      <Directions/>
      </Item>
      <div>
      <Grid className="footer" container spacing={2}>
        <Grid item xs={6}>
          <Item>
          <Hours/>
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Delivery/>
            </Item>
        </Grid>
      </Grid>
      
      </div>
     
</Container>
    );
  }
  
  export default LocationAndInfo;