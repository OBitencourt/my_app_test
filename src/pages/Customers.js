
import React, {useEffect, useState} from 'react';
import axios from 'axios'

import CustomersCard from '../components/CustomersCard'

const Customers = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data

                setCustomers(data)

                console.log(customers)
            })
    }, [])

    return (
        <>
            <h1>Users</h1>
            {
                customers.map(item => (
                    
                    <CustomersCard 
                        name={item.first_name}
                        lastname={item.last_name}
                        email={item.email}
                        avatar={item.avatar}
                    />
                ))
            }
        </>
    )
}

export default Customers