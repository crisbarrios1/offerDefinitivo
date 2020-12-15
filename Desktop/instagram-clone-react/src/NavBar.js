import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({    
    appBar:{
        backgroundColor:'#65FACB',
    }
  }));

const NavBar = () => {
const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appBar} position="relative">
                <Toolbar>
                
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;