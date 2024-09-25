import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Register = () => {
    return (
        <>  
            <div>
                <TextField label="Type your name" variant="standard" sx={{ marginTop: 5}}/> 
            </div>
            <div>                               
                <TextField label="Type your job" variant="standard" sx={{ marginTop: 5}}/> 
            </div>
            <div>
                <Button sx={{marginTop: 5}} variant="contained">Sign</Button>
            </div>
        </>
    )
}

export default Register