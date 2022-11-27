import React from "react";
import { Card } from "@mui/material";
import { Container } from "@mui/system";
import {Box} from "@mui/material";


function Menu() {
    return (
      
      <Container>
        <Box>
      <section id="Menu">
        <h2>Menu</h2>
      <div>
        <Card>
       <p><a href="https://www.facebook.com/branchburgsbest">Today's Specials</a></p>
        </Card>
        <Card>
        <p>Breakfast & Lunch All Day</p>
        </Card>
        <Card>
        <p><a href="https://branchburgsbest.square.site/">Order Online</a></p>
        </Card>
      </div>
      </section>
      </Box>
  </Container>
 
    );
  }
  
  export default Menu;