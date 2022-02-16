import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h5'>eShop</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
