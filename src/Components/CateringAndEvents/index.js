import React from "react";
import EventsGallery from "./EventsGallery";
import ListOfEvents from "./ListOfEvents";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CateringAndEvents() {
    return (
         <Grid className="footer" container spacing={2}>
         <Grid item xs={6}>
           <Item>
           <EventsGallery/>
             </Item>
         </Grid>
         <Grid item xs={6}>
           <Item>
           <ListOfEvents/>
             </Item>
         </Grid>
       </Grid>
    );
  }
  
  export default CateringAndEvents;