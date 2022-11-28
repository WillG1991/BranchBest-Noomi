import React from "react";
import Card from '@mui/material/Card';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function MailingList() {
    return (
     
      
      <Card>
        <div>
        Join Our Mailing List
        </div>
        <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <Button variant="contained">Submit</Button>
        </Card>
       
    
    );
  }
  
  export default MailingList;