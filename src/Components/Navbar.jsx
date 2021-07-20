import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { NavLink } from 'react-router-dom';
//import Button from '@material-ui/core/Button';
//import {Navlink} from 'react-router-dom';


const useStyles = makeStyles({
    header: {
      background: '#111111'
    },
    tabs:{
        color:"#ffffff",
        textDecoration:"none",
        marginRight: 20,
        fontSize:20
    }
    
  });


const Navbar = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
        <AppBar className={classes.header} position='static'>
        <Toolbar>
          <NavLink className={classes.tabs} to ="./" exact >Home Page</NavLink>
          <NavLink className={classes.tabs} to="all" exact >All User</NavLink>
          <NavLink className={classes.tabs} to="add" exact >Add User</NavLink>
        </Toolbar>
      </AppBar>
        </React.Fragment>
    )
}

export default Navbar;
