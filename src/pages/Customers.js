
import React, {useEffect, useState} from 'react';
import axios from 'axios'

import {
    Grid,
    Paper,
} from '@mui/material'
import CustomersCard from '../components/CustomersCard'


import { makeStyles, styled } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
    }
}))


const Customers = () => {
    const classes = useStyles()

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data

                setCustomers(data)

                console.log(customers)
            })
    }, [])


    // XS = EXTRA SMALL
    // SM = SMALL
    // MD = MEDIUM
    // LG = LARGE
    // XL = EXTRA LARGE

    return (
        <>

            <Grid container>
                            
                {   
                    customers.map(user => (
                        
                        <Grid item xs={12} md={6} lg={4}>
                            <CustomersCard 
                                name={user.first_name}
                                lastname={user.last_name}
                                email={user.email}
                                avatar={user.avatar}
                                className={classes.card}
                                
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Customers