import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BBLogo from '../../Images/Logo.png'


const drawerWidth = 240;
const navItems = ['Main', 'Location & Info', 'Menu', 'Catering & Events', 'Gallery', "Order Now"];


function Nav(props) {
  const { window } = props;
  console.log(props)
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
     
      </Typography>
      <Divider />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => props.handlePageChange('Menu')} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
               <img className="NavLogo" src={BBLogo}  alt="Logo"/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}
              onClick={() => props.handlePageChange(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
   
      </Box>
    </Box>
  );
}



export default Nav;




// import React from "react";
// import BottomNavigation from '@mui/material/BottomNavigation';



// function Nav({ handleClick }) {
//   return (
//     <BottomNavigation sx={{ width: 500 }} >
//   <header class="hidden-mobile">
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <span
//               data-testid="About"
//               href="#About"
//               onClick={() => handleClick("About")}
//             >
//               <h3>
//                 <a data-testid="link" href="#About">
//                   <span>
//                     <h3>About-Me</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//               data-testid="Catering"
//               href="#Catering"
//               onClick={() => handleClick("Catering")}
//             >
//               <h3>
//                 <a data-testid="link" href="#Catering">
//                   <span>
//                     <h3>Catering</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//               data-testid="Landing"
//               href="#Landing"
//               onClick={() => handleClick("Landing")}
//             >
//               <h3>
//                 <a data-testid="link" href="#Landing">
//                   <span>
//                     <h3>Landing</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//               data-testid="Menu"
//               href="#Menu"
//               onClick={() => handleClick("Menu")}
//             >
//               <h3>
//                 <a data-testid="link" href="#Menu">
//                   <span>
//                     <h3>Menu</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//               data-testid="OrderContact"
//               href="#OrderContact"
//               onClick={() => handleClick("OrderContact")}
//             >
//               <h3>
//                 <a data-testid="link" href="#OrderContact">
//                   <span>
//                     <h3>OrderContact</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//               data-testid="ContactForm"
//               href="#ContactForm"
//               onClick={() => handleClick("ContactForm")}
//             >
//               <h3>
//                 <a data-testid="link" href="#ContactForm">
//                   <span>
//                     <h3>Contact Us</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>
//           <li className="mx-2">
//             <span
//             >
//               <h3>
//                 <a target="_blank" data-testid="link" href="https://branchburgsbest.square.site/s/order">
//                   <span>
//                     <h3>Order Now</h3>
//                   </span>
//                 </a>
//               </h3>
//             </span>
//           </li>

         
         
//         </ul>
//       </nav>
//     </header>
//     </BottomNavigation>
//   );
// }

// export default Nav;
