import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Delivery from "../../LocationAndInfo/Delivery";
import Hours from "../../LocationAndInfo/Hours";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LinkToOrderAndHours() {
    return (
     
       <Grid container spacing={2}>
       <Grid Item className="linkOrderAndHours" item xs={6}>
         <Item className="orderHoursItem">
         <Hours/>
           </Item>
       </Grid>
       <Grid Item className="linkOrderAndHours" item xs={6}>
         <Item className="orderHoursItem">
         <Delivery/>
           </Item>
       </Grid>
     </Grid>
     
   
      
    );
  }
  
  export default LinkToOrderAndHours;