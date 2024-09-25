
import axios from 'axios'

import Toasty from '../../components/Toasty'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

// import CircularProgress from '@mui/material/CircularProgress';


const Edit = () => {

    const { id } = useParams()

    
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
    
    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                const { data } = response.data

                setForm({
                    name: {
                        value: data.first_name,
                        error: false,
                    },
                    job: {
                        value: data.job,
                        error: false
                    }
                })
            })
    }, [])





    const handleInputChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }
    
    

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

        axios.put(`https://reqres.in/api/users/${id}`, {
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
                        isLoading ? 'Wait...' : 'Edit customer'
                    }
                </Button>
            </div>
            <Toasty 
                open={openToasty} 
                severity='success' 
                text="The customer has been edited sucessfully!"
                onClose={() => {
                    setOpenToasty(false)
                }}
            />
        </>
    )
}

export default Edit