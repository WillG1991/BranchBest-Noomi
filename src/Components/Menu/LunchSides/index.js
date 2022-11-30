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
                                    Fries
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                        
$3.50 - $4.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Delicious Straight Cut French Fries or Sweet Potato Fries                            </Typography>
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
                                    Baked Potato
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                       
$3.50 - $4.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Baked white potato or sweet potato. Additional toppings available for extra charge.                            </Typography>
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
                                    Mozzarella Sticks
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $5.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Mozzarella sticks. Served with marinara sauce.                            </Typography>
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
                                    Chicken Fingers
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $7.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Crispy chicken tenders. Served a la carte.                            </Typography>
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
                                    Chicken Wings
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $7.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Crispy fried breaded chicken wings.                            </Typography>
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
                                    Caesar Salad
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $4.25 - $8.00
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            Chopped romaine, parmesan cheese, croutons, & caesar dressing. Served as a side, full, or wrap.                                           </Typography>
                        </Box>
                    </Box></Item>
                    
                </Grid>
                {/* --------ITEM 6 End----------- */}
                <br></br>
                <br></br>
                {/* -----------------------------------------------Row 3 START-------------------------------------------------- */}
                 {/* ---------------ITEM 7 Start-----------------*/}
                 <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                    Chicken Salad
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $3.00 - $5.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            House made chicken salad.                                          </Typography>
                        </Box>
                    </Box></Item>
                    
                </Grid>
                {/* ---------------ITEM 7 End-----------------*/}
                {/* ---------------ITEM 8 Start-----------------*/}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                    Tuna Salad
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $3.00 - $5.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            House made tuna salad.                                          </Typography>
                        </Box>
                    </Box></Item>
                    
                </Grid>
                {/* ---------------ITEM 8 End-----------------*/}
                {/* ---------------ITEM 9 Start-----------------*/}
                <Grid item xs={4}>
                    <Item>    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                    Egg Salad
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography gutterBottom variant="h6" component="div">
                                    $3.00 - $5.50
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                            House made egg salad.                                         </Typography>
                        </Box>
                    </Box></Item>
                    
                </Grid>
                {/* ---------------ITEM 9 End-----------------*/}
                
            </Grid>
        </Box>
        </div>

    );
}
