import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FooterContact from './FooterContact';
import MailingList from './MailingList';
import Socials from './Socials'
import '../../App.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Footer() {
  return (
    
   <>
      <Grid className="Footer" container spacing={2}>
        <Grid item xs={4}>
          <Item className='footerItem'>
            <MailingList/>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='footerItem'>
          <FooterContact />
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='footerItem'>
          <Socials/>
          </Item>
        </Grid>
      </Grid>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href="BranchburgsBest.com">
        Branchburgs Best 2022
      </a>
    </div>
   </>
  );
}








