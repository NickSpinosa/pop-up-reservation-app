import React, {Component} from 'react';
import axios from 'axios';
import {browserHistory} from "react-router"; 

class ChefLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: this.props.url
    }
  }

  postLogin(e){
    e.preventDefault();

    axios.post(this.state.url, {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    })
    .then(function(response){
      console.log("response", response);

      if(response.data !== "wrong password" || response.fata !== "restaurant name not found" && response.data !== "that name already exits"){
        browserHistory.push("/chef");
      } else {
        alert(response.data);
      }
    })
  }

  setUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  setPassword(e){
    this.setState({
      password: e.target.value
    });
  }

  setName(e){
    this.setState({
      name: e.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.postLogin.bind(this)}>
        <label>Restaurant Name</label>
        <input type="text" ref="text" placeholder="ex. LaCroix" onChange={this.setName.bind(this)} />
        <label>Username</label>
        <input type="text" ref="text" placeholder='username' onChange={this.setUsername.bind(this)} />
        <label>Password</label>
        <input type="password" ref="text" placeholder='password' onChange={this.setPassword.bind(this)} />
        <button>Submit</button>
      </form>
    );
  }

}

export default ChefLogin;