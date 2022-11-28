import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
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

export default function DeliSandwiches() {
    return (
        // ROW 1 START
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* -------------ITEM 1 Start--------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        The Waldorf
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                House made chicken salad, sliced apples, shredded lettuce, & cranberry mayo served on multi-grain toast. Add sides for additional cost.                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ------------ITEM 1 END -------------*/}
                {/* ----------ITEM 2 Start------------ */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Firehouse
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Boar's Head roast beef, spicy bacon, & pepper jack cheese, & horseradish mayo on a kaiser roll. Add sides for additional cost.                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ---------ITEM 2 END---------- */}
                {/* --------ITEM 3 START------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        The Dean
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Boar's Head roast beef, spicy bacon, & pepper jack cheese, & horseradish mayo on a kaiser roll. Add sides for additional cost.                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ------------ITEM 3 End------------ */}
            </Grid>
            {/* ------------Row 1 End------------ */}
            <br></br>
            <br></br>
            {/* -------------------Row 2 Start-------------- */}
            <Grid container spacing={2}>
                {/* --------------ITEM 4 Start---------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Italian Sub
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.25 - $15.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Boar's Head ham, salami, capicola, & provolone cheese topped with banana peppers, roasted red peppers, lettuce, tomato, onion, oil & vinegar, & italian seasoning on a 7" sub roll. Make it a whole 14" sub for +$7.25. Add sides for additional cost.                             </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* ------------ITEM 4 END------------- */}
                {/* ----------------ITEM 5 Start------------- */}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Sloppy Joe
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $9.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Your choice of deli meat, swiss cheese, sloppy slaw, & housemade thousand island on triple decker rye. Add sides for additional cost.                            </Typography>
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
                                        Deli Boy
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $8.25
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Pastrami, swiss cheese, deli mustard, potato chips, & pickles served on a kaiser roll. Add sides for additional cost.
                            </Typography>
                        </Box>
                    </Box></Item>
                </Grid>
                {/* --------ITEM 6 End----------- */}
            </Grid>
        </Box>
        ///////// ROW 2 END ///////////


    );
}