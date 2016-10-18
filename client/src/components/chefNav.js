import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';
import EventsContainer from './eventsContainer.js'
import NewEventForm from "./registerEvent.js"
import axios from 'axios';

class ChefNav extends Component {
   constructor(props) {
    super(props);
    this.state = {
     events: []
    }
    this. loadAllEvents();
  }

  toggleNewEventForm(){
    this.setState({
      events: []
    });
  }

  renderChild() {
    if(this.state.events.length !== 0){
      return <EventsContainer events={this.state.events} />;
    } else {
      return <NewEventForm />;
    }
  }

  loadAllEvents() {
    console.log("load events");
    let component = this;

    console.log("component", component);

    axios.get("events")
    .then(function(response){
      console.log("response from server ==>",(response.data));
      component.setState({events: response.data});
    })
    .catch(console.log); 
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
            <li className="create"><Link to={"/chef"}onClick={this.loadAllEvents.bind(this)} className='index'>My Events</Link></li>
            <li><Link to={"/chef"} onClick={this.toggleNewEventForm.bind(this)} className='create'>Register New Event</Link></li>
            <li><Link to={"/user"} className='logout'>User</Link></li>
          </ul>
        </div>
        {this.renderChild()}
      </div>
    );
  }
}

export default ChefNav;