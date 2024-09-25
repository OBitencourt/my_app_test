

import Typography from '@mui/material/Typography';


/* const useStyles = makeStyles(() => ({
    container: {
        padding: '15px 0px'
    }
}))*/

const Page = ({ title, Component }) => {
    // const classes = useStyles()

    return (
        <>
            <Typography sx={{ marginTop: 5 }} variant="h2">
                {title}
            </Typography>
            <Component />
            
        </>
    )
}

export default Page