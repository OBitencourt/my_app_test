import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react'

const Login = () => {


    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        console.log(form)
    }

    return (
        <>  
            <Typography variant="h3">
                Acesso Restrito
            </Typography>
            <div>

                <TextField 
                    onChange={handleInputChange}
                    sx={{ marginTop: 5}} 
                    variant="standard" 
                    label="E-mail" 
                    name="email"
                >
                </TextField>
            </div>
            <div>

                <TextField 
                    onChange={handleInputChange}
                    sx={{ marginTop: 5}} 
                    variant="standard" 
                    label="Password" 
                    type="password"
                    name="password"
                >
                </TextField>
            </div>
            <Button sx={{ marginTop: 5}} variant="contained" onClick={handleFormSubmit}>Entrar</Button>
        </>
    )
}

export default Login