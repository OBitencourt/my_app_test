
import axios from 'axios'

import Toasty from '../../components/Toasty'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState} from 'react'

// import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false
        }
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }
    
    
    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError = false

        let newFormState = {
            ...form,
        }


        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Fill the field "name" correctly!'
            }
        }
    

        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Fill the field "job" correctly!'
            }
        }

        if (hasError) {
           return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value
        }).then(response => {
            console.log('ok', response)
            setOpenToasty(true)
            setIsLoading(false)
        })
    }


    return (
        <>  
            <div>
                <TextField 
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    label="Type your name" 
                    onChange={handleInputChange} 
                    value={form.name.value} 
                    variant="standard" 
                    name="name" 
                    sx={{ marginTop: 5}}
                /> 
            </div>
            <div>                               
                <TextField 
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    label="Type your job" 
                    value={form.job.value} 
                    onChange={handleInputChange} 
                    variant="standard" 
                    name="job" 
                    sx={{ marginTop: 5}}
                /> 
            </div>
            <div>
                <Button disabled={isLoading} sx={{marginTop: 5}} variant="contained" onClick={handleRegisterButton}>
                    {
                        isLoading ? 'Wait...' : 'Sign'
                    }
                </Button>
            </div>
            <Toasty 
                open={openToasty} 
                severity='success' 
                text="The customer as signed sucessfully!"
                onClose={() => {
                    setOpenToasty(false)
                }}
            />
        </>
    )
}

export default Register