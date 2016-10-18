import '../index.css';
import React, { Component } from 'react';
import axios from 'axios';

class NewEventForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      description: "",
      date: "",
      location: ""
    }
  }
  
  postEvent(e) {

    console.log("form", this.state);

    axios.post("/events", this.state)
      .then(function(response){
        console.log("response ==>", response);
      })
      .catch(function(error){
        console.log("error ==>", error)
      })
  }

  changeTitle(e){
    this.setState({name:e.target.value});
  }

  changeDate(e){
    this.setState({date:e.target.value});
  }

  changeLocation(e){
    this.setState({location:e.target.value});
  }

  changeDescription(e){
    this.setState({description:e.target.value});
  }

  render(){
    return (
      <div>
        <form  onSubmit={this.postEvent.bind(this)}>
          <label>Title</label>
          <input id="title" type="text" ref="text" placeholder='Title' onChange={this.changeTitle.bind(this)}  />

          <label>Date</label>
          <input id="date" type="text" ref="text" placeholder='Date' onChange={this.changeDate.bind(this)} />

          <label>Location</label>
          <input id="location" type="text" ref="text" placeholder='Location' onChange={this.changeLocation.bind(this)} />

          <label>Description</label>
          <textarea id="description" rows="4"ref="text" placeholder='Description' onChange={this.changeDescription.bind(this)}></textarea>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewEventForm