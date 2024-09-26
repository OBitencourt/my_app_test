import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState } from 'react'

import { useHistory } from 'react-router-dom';

import useAuth from '../state/auth'

const Login = () => {
    const history = useHistory()


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

    const {user, setUser} = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            
            setUser({
                logged: true,
                email: form.email
            })

            setIsLoading(false)
            history.push('/')
            window.location.reload()
        }, 4000)
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
            
            <Button 
                sx={{ marginTop: 5}} 
                variant="contained" 
                onClick={handleFormSubmit}
            >
                {
                    isLoading ? 'Wait...' : 'Login'
                }
            </Button>
            
        </>
    )
}

export default Login