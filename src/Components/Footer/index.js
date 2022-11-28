import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hours from './Hours';
import { Container } from '@mui/system';
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
    <footer className="w-100 mt-auto bg-tertiary p-4">
   
      <Grid container spacing={2}>
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








