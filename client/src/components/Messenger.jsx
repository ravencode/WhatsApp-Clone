import {AppBar , Toolbar, makeStyles,Box} from '@material-ui/core';
import React, { useContext } from 'react';
import Login from './account/Login';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox';


const useStyles = makeStyles({
    component: {
        background: '#DCDCDC',
        height: '100vh'
    },
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    header: {
        height: 115,
        background: '#00bfa5',
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
   <Box className={classes.component}>
   <AppBar className={ account ? classes.header: classes.loginHeader}>
        <Toolbar></Toolbar>
    </AppBar>
    { account ? <ChatBox/> : <Login /> }
    
    </Box>
    )
} 



export default Messenger;