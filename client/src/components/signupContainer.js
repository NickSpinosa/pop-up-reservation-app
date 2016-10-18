import '../index.css';
import React, { Component } from 'react';
import {Link} from 'react-router';
import User from './userLogin';
import Chef from './chefLogin';

class SignupContainer extends Component {
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
      return <User url={"/user-signup"}/>;
    } else {
      return <Chef url={"/chef-signup"}/>;
    }
  }

  render(){
    return (
      <div className="event-form">
        <h3 className={"check-box"}> Signup </h3>
        <label>Are you a Chef?</label>
        <input type="checkbox" onChange={this.toggleView.bind(this)}/>
        {this.renderView()}
        <Link className="margin" to="/signin">Already have an account? Signin!</Link>
      </div>
    );
  }
}

export default SignupContainer;

