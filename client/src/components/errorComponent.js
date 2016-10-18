import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';

const errorNotFound = () => {
  return (
    <div className='error'>
      <h1> Sorry, we couldn't find that page :( ' </h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default errorNotFound;