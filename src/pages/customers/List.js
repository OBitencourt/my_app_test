
import React, {useEffect, useState} from 'react';
import axios from 'axios'

import {useHistory} from 'react-router-dom'

import {
    Grid,
    
} from '@mui/material'
import CustomersCard from '../../components/CustomersCard'


import { makeStyles, } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
    }
}))


const List = () => {
    const classes = useStyles()

    const history = useHistory()
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data

                setCustomers(data)

            })
    }, [])
            

    const handleRemoveCustomer = (id) => {
        alert('ok, remover customer')

        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {
                
                const newCustomersState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomersState)

            })
    }

    const handleEditCustomer = id => {
        history.push(`/customers/edit/${id}`)
        window.location.reload()
    }

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
                                id={user.id}
                                name={user.first_name}
                                lastname={user.last_name}
                                email={user.email}
                                avatar={user.avatar}
                                className={classes.card}
                                onRemoveCustomer={handleRemoveCustomer}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default List