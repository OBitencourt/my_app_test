import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Toasty = ({open, onClose, text, severity }) => {

  const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };




  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="The customer was signed sucessfully!"
        
      >
        <Alert  
            onClose={onClose}
            severity={severity}
            variant="filled"
            sx={{ width: '100%' }} 
        >
            {text}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Toasty