import React from 'react'
import Header from './Header'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    container: {
       marginTop: '6rem'
    }
}))

function Layout({children}) {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
             </Container>


        </>
    )
}

export default Layout
