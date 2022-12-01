import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function MailingList() {
    return (
     
      
      <>
        <div>
        Join Our Mailing List
        </div>
        <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <Button variant="contained">Submit</Button>
        </>
       
    
    );
  }
  
  export default MailingList;