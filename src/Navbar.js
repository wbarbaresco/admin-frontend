import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, AppBar, IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu'; 




const Navbar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          News
    </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
