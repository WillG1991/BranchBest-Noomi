import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hours from './Hours';
import MailingList from './MailingList';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Footer() {
  return (
    <footer>
   
      <Grid className="footer" container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <Hours/>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <MailingList/>
          </Item>
        </Grid>
      </Grid>
      
      </footer>
  );
}








