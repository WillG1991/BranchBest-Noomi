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
  createData('Fries', "Delicious Straight Cut French Fries or Sweet Potato Fries.", "$3.50 - $4.50"),
  createData('Baked Potato', "Baked white potato or sweet potato. Additional toppings available for extra charge.", "$3.50 - $4.50" ),
  createData('Mozzarella Sticks', "Mozzarella sticks. Served with marinara sauce.", "$5.00" ),
  createData('Chicken Fingers', "Crispy chicken tenders. Served a la carte.", "$7.00" ),
  createData('Chicken Wings', "Crispy fried breaded chicken wings.", "$7.00" ),
  createData('Caesar Salad', "Chopped romaine, parmesan cheese, croutons, & caesar dressing. Served as a side, full, or wrap.", "$4.25 - $8.00" ),
  createData('Chicken Salad', "House made chicken salad.", "$3.00 - $5.50" ),
  createData('Tuna Salad', "House made tuna salad.", "$3.00 - $5.50" ),
  createData('Egg Salad', "House made egg salad.", "$3.00 - $5.50" ),
  
];

function LunchSides() {
    return (
      
      <Container>
        <Box>
      <section id="Lunch">
       
        <h4 align="center"> Lunch Sides</h4>
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
  
  export default LunchSides;