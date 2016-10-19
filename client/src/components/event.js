import '../index.css';
import React, { Component } from 'react';
import axios from 'axios';

class EventView extends Component{

  register() {
    console.log("registered");
    console.log("id", this.props.id);
    
    axios.post("/user-events", this.props.id)
      .then((response) => {
        console.log("response ==>", response);
      })
      .catch((eror) => {
        console.log("error ==>", error);
      })
  }

  renderRegisterButton() {
    console.log("register", this.props.register);
    if(this.props.register){
      return <button onClick={this.register.bind(this)}>Register</button>;
    }
  }

  render(){
    return (
      <div className="event">
        <div>
          {this.renderRegisterButton()}
          <h2>{this.props.title}</h2>
          <h3>{this.props.location + " " + this.props.date}</h3>
        </div>
        <p>{this.props.description}</p>
        <h4>{"--" + this.props.restaurant}</h4>
      </div>
    );
  }
  
}

export default EventView;