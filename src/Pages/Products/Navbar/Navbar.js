import React from 'react';
import { AppBar, Badge, createTheme, IconButton, Toolbar, Typography } from "@material-ui/core";
import logo from './../../../Images/site-logo.png'
import { ShoppingCart } from '@mui/icons-material';
import useStyles from './StylesNav'
import { Link } from 'react-router-dom';
   
const Navbar = ({totalItems}) => {

  const classes = useStyles()

    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                <Typography to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    </IconButton>
                </div>
                
                </Toolbar>
            </AppBar>
        </>
        );
};

export default Navbar;