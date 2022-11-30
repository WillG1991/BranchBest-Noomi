import React from "react";
import { Card } from "@mui/material";
import { Container } from "@mui/system";
import {Box} from "@mui/material";
import Lunch from "./Lunch";
import LunchSides from "./LunchSides";
import DeliSandwiches from "./DeliSandwiches";


function Menu() {
    return (
      
      <Container>
        <Box>
      <section className="Menu" id="Menu">
      <h2 align="center">Menu</h2>
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
      <h2 align="center"> Lunch</h2>
        <Lunch/>
        <h2 align="center"> Lunch Sides</h2>
        <LunchSides/>
        <h2 align="center"> Deli Sandwiches</h2>
        <DeliSandwiches/>
      </section>
      </Box>
  </Container>

    );
  }
  
  export default Menu;