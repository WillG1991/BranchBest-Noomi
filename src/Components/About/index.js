import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageList';
import { Container } from "@mui/system";

function About() {
    return (
      <Container>
      <section id="about">
    <h2>About Us</h2>
    <h3>Good Food, Good Stuff!</h3>
    <div>
        <p>Branchburg's Best is bringing you the best of what our community has to offer</p>
        <p>All in a convenient one stop shop!</p>
        <p>Proudly serving top knotch products from local farms & trusted quality sources</p>
        <p>Like Boar's Head & Norz Hill Farm</p>
        <p>There's something for every body at Branchburg's Best...</p>
        <p>Where it always feels like home!</p>
    </div>
</section>
</Container>
    );
  }
  
  export default About;