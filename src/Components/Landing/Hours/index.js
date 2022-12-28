import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Hours() {
    return (
        <section id="hours">
            <h2>Breakfast & Lunch Served All Day!</h2>
            <h3>BYOB</h3>

            <h2>Hours:</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid className="landingGrid" item xs={6}>
                        <h2>Hours:</h2>
                        <ul>
                            <li>Monday to Friday</li>
                            <li>6:00am - 4:00pm</li>
                            <li>Saturday</li>
                            <li>6:00am-3:00pm</li>
                            <li>Sunday</li>
                            <li>7:00am - 3:00pm</li>
                        </ul>

                    </Grid>
                    <Grid className="landingGrid" item xs={6}>

                        <h2>Local Deliveries:</h2>
                        <ul>
                            <li>Monday to Friday</li>
                            <li>9:00am-2:00pm</li>
                            <li>Saturday & Sunday</li>
                            <li>9:00am-1:00pm</li>
                        </ul>

                    </Grid>
                </Grid>
            </Box>




        </section>

    );
}

export default Hours;