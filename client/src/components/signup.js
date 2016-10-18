import '../index.css';
import React, { Component } from 'react';
import {Link} from 'react-router';

class Signup extends Component {
  signUp(){

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
        <Link to="/signin">Already have an account? Signin!</Link>
      </div>
    );
  }
}

export default Signup