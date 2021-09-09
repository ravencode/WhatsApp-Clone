import {AppBar , Toolbar, makeStyles,Box} from '@material-ui/core';
import React from 'react';
import Login from './account/Login';


const useStyles = makeStyles({
    component: {
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    return (
   <Box className={classes.component}>
   <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
    </AppBar>
    <Login />
    </Box>
    )
}



export default Messenger;