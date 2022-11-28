import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function DeliSandwiches() {
  return (

    

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
      {/* // Sandwich 1 Start // */}
      <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              The Waldorf
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $8.00
            </Typography>
            
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        House made chicken salad, sliced apples, shredded lettuce, & cranberry mayo served on multi-grain toast. Add sides for additional cost.
        </Typography>
        {/* // Sandwich 1 End // */}
</Box>
    </Box>
    
  );
}