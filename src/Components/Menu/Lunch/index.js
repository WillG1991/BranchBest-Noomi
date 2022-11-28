import React from "react";
import { Card } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Container } from "@mui/system";
import {Box} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function createData(name, description, price) {
  return { name, description, price };
}

const rows = [
  createData('Hot Dog', "100% beef hot dog served three ways: Chili & cheese (homemade local beef chili & cheddar cheese) Chicago (tomato, white onions, relish, & banana peppers) Italian (two dogs, potatoes, peppers & onions on a 7'' sub roll) Served a la carte with your choice to add sides.", "$3.75 - $6.25"),
  createData('Grilled Cheese', "Grilled cheese served three ways: Classic (white & yellow American on white) Jersey (pork roll, tomato, & white American on brioche) New Yorker (corned beef, pastrami, swiss, & thousand island on seeded rye", "$5.25 - $8.25" ),
  createData('Chicken Sandwich', "Your choice of crispy or grilled chicken, served on a Kaiser roll in three different styles: Club (bacon, lettuce, tomato, & herb mayo) Buffalo (buffalo sauce, lettuce tomato, & ranch or bleu cheese) Cordon bleu (ham, Swiss, lettuce, tomato, & honey mustard) Served a la carte with your choice to add sides.", "$7.00 - $9.75" ),
  createData('The Reubens', "Choice of corned beef, pastrami, or turkey. Corned beef &/or Pastrami (served on grilled rye with Swiss, kraut, & 1000 island) Turkey (served on grilled rye with Swiss, slaw, & 1000 island) Served a la carte with your choice to add sides.", "$8.25 - $8.75" ),
  createData('Cheesesteak', "Choice of philly style beef or chicken three ways: Classic (American cheese, peppers & onions) Buffalo (pepper jack cheese, jalapeños, banana peppers, & buffalo sauce) Jersey (white American cheese & chopped pork roll) Served a la carte with your choice of sides.", "$8.25 - $9.75" ),
  createData('Best Burgers', "1/2LB Norz Hill Farm beef patty served on a Kaiser roll in three styles: Classic (American, lettuce, tomato, onion, ketchup & mayo) Jersey (pork roll, white American, hash brown, SPK) BBQ Bacon (bacon, crispy onions, cheddar, house BBQ) Served a la carte with your choice to add sides.", "$8.25 - $8.75" ),

];

function Lunch() {
    return (
      
      <Container>
        <Box>
      <section id="Lunch">
       
        <h4 align="center"> Hot Lunch</h4>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <StyledTableRow>
          <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
     
            
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </section>
      </Box>
  </Container>
 
    );
  }
  
  export default Lunch;