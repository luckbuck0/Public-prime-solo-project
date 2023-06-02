import React from 'react';
import './Footer.css';
import { Typography } from '@mui/joy';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <div className='foot'><br /> <br /> <footer><Typography color='primary'> &copy; ZENTAB</Typography></footer></div>;
}

export default Footer;
