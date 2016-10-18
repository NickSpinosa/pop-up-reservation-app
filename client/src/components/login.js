import '../index.css';
import React, { Component } from 'react';
import {Link} from 'react-router';

class Signin extends Component {
  logIn(){

  }
  
  render(){
    return (
      <div>
        <h3> Log In </h3>
        <form>
          <label>Username</label>
          <input type="text" ref="text" placeholder='username'  />
          <label>Password</label>
          <inpu type="password" ref="text" placeholder='password'  />

          <button>Submit</button>
        </form>
        <Link to="/signup">Don't have an account? Signup!</Link>
      </div>
    );
  }
}

export default Signin