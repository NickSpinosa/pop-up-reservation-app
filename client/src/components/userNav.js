import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';
import EventsContainer from "./eventsContainer.js";
import axios from 'axios';

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[],
      allEvents: true
    }
    this.loadAllEvents();
  }

  loadAllEvents() {
    let component = this;

    axios.get("events")
    .then(function(response){
      console.log("response from server ==>",response.data);
      component.setState({events: response.data, allEvents: true});
    })
    .catch(console.log); 
  }

  renderEvents(){
    console.log("render events");
    if(this.state.events.length !== 0){
      return <EventsContainer events={this.state.events} register={this.state.allEvents}/>;
    }
  }

  loadMyEvents() {
    let component = this;

    axios.get("/user-events")
    .then(function(response){
      console.log("response from server ==>",response.data);
      component.setState({events: response.data, allEvents: false});
    })
    .catch(console.log); 
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
            <li><Link to={"/user"} onClick={this.loadMyEvents.bind(this)} className='index'>My Events</Link></li>
            <li><Link to={"/user"} onClick={this.loadAllEvents.bind(this)} >Find Events</Link></li>
            <li><Link to={"/chef"} >Chef</Link></li>
          </ul>
        </div>
        {this.renderEvents()}
      </div>
    
    );
  }
}

export default UserNav;