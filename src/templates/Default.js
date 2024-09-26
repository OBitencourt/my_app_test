import Container from '@mui/material/Container';

import { makeStyles } from '@mui/styles';

import Header from "../partials/Header/Header"

import useAuth from '../state/auth'

const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0px'
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()

    const {user} = useAuth()

    

    return (
        <>
            <Header user={user}/>
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default