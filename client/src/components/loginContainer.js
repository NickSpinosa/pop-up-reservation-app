import '../index.css';
import React, { Component } from 'react';
import {Link} from 'react-router';
import User from './userLogin';
import Chef from './chefLogin';

class SigninContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: true
    }
  }

  toggleView() {
    this.setState({
      user: !this.state.user
    });
  }

  renderView(){
    if(this.state.user){
      return <User url={"/user-signin"}/>;
    } else {
      return <Chef url={"/chef-signin"}/>;
    }
  }

  render(){
    return (
      <div className={"event-form"}>
        <h3> Sign In </h3>
        <label>Are you a Chef?</label>
        <input type="checkbox" onChange={this.toggleView.bind(this)}/>
        {this.renderView()}
        <Link className={"margin"} to="/signup">Don't have an account? Signup!</Link>
      </div>
    );
  }
}

export default SigninContainer;