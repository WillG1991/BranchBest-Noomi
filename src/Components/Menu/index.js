import React from "react";
import { Card } from "@mui/material";
import { Container } from "@mui/system";
import {Box} from "@mui/material";
import MenuImage from "./MenuImage";
import LinkToOrderAndHours from "./LinkToOrderAndHours";


function Menu() {
    return (
      
      <Container>
        <Box>
      <section className="Menu" id="Menu">
      <h2 align="center">Menu</h2>
      <div>
        <Card align="center">
       <p><a href="https://www.facebook.com/branchburgsbest">Today's Specials</a></p>
        <p>Breakfast & Lunch All Day</p>
        </Card>
        <MenuImage/>
        <LinkToOrderAndHours/>
      </div>
      </section>
      </Box>
  </Container>

    );
  }
  
  export default Menu;