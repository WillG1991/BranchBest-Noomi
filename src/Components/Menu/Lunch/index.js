import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function
    Lunch() {
    return (
        // ROW 1 START
        <div className="MenuBox">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* ----------------------------------------ITEM 1 Start-------------------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Hot Dog
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $3.75 - $6.25
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                100% beef hot dog served three ways: Chili & cheese (homemade local beef chili & cheddar cheese) Chicago (tomato, white onions, relish, & banana peppers) Italian (two dogs, potatoes, peppers & onions on a 7'' sub roll) Served a la carte with your choice to add sides.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* -----------------------------------ITEM 1 END-----------------------------------*/}
                {/* ----------------------------------ITEM 2 Start--------------------------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Grilled Cheese
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $5.25 - $8.25
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Grilled cheese served three ways: Classic (white & yellow American on white) Jersey (pork roll, tomato, & white American on brioche) New Yorker (corned beef, pastrami, swiss, & thousand island on seeded rye.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* --------------------------------ITEM 2 END------------------------ */}
                {/* -----------------------------ITEM 3 START----------------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Chicken Sandwich
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $7.00 - $9.75
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Your choice of crispy or grilled chicken, served on a Kaiser roll in three different styles: Club (bacon, lettuce, tomato, & herb mayo) Buffalo (buffalo sauce, lettuce tomato, & ranch or bleu cheese) Cordon bleu (ham, Swiss, lettuce, tomato, & honey mustard) Served a la carte with your choice to add sides.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ------------------------------------ITEM 3 End------------------------------- */}
            </Grid>
            {/* -------------------------------------------------------------Row 1 End--------------------------------- */}
            <br></br>
            <br></br>
            {/* -------------------------------------------------------------Row 2 Start------------------------------------- */}
            <Grid container spacing={2}>
                {/* ---------------------------------------ITEM 4 Start------------------------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        The Reubens
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.25 - $8.75
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Choice of corned beef, pastrami, or turkey. Corned beef &/or Pastrami (served on grilled rye with Swiss, kraut, & 1000 island) Turkey (served on grilled rye with Swiss, slaw, & 1000 island) Served a la carte with your choice to add sides.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ------------------------------------ITEM 4 END-------------------------------------------- */}
                {/* ---------------------------------ITEM 5 Start------------------------------------------ */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Cheesesteak
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.25 - $9.75
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Choice of philly style beef or chicken three ways: Classic (American cheese, peppers & onions) Buffalo (pepper jack cheese, jalapeños, banana peppers, & buffalo sauce) Jersey (white American cheese & chopped pork roll) Served a la carte with your choice of sides.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ---------------ITEM 5 END------------ */}
                {/* ---------------ITEM 6 Start-----------------*/}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Best Burgers
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.25 - $8.75
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                1/2LB Norz Hill Farm beef patty served on a Kaiser roll in three styles: Classic (American, lettuce, tomato, onion, ketchup & mayo) Jersey (pork roll, white American, hash brown, SPK) BBQ Bacon (bacon, crispy onions, cheddar, house BBQ) Served a la carte with your choice to add sides.                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* --------ITEM 6 End----------- */}
            </Grid>
        </Box>
        </div>

    );
}
