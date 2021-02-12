import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
// import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
            color: '#fff'
        },
    },
}));


function Header(props) {

    const [value, setValue] = useState(0)

    const handleChange = (e, value) => {
        setValue(value)
    }



    const preventDefault = (event) => event.preventDefault();

    return (


        <>
            <Link to="/">
                home
            </Link>

            <Link to="/favorites">
                favorites
            </Link>
        </>




    )
}

export default withRouter(Header)
