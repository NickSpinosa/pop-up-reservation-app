import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';
import EventsContainer from './eventsContainer.js'
import NewEventForm from "./registerEvent.js"

const dummyData = [
  { title: "a night in paris",
    location: "bushwick brooklyn",
    date: "dec 10, 2016",
    description: "classic parisian fare",
    restaurant: "Grain and Ashe"
  },
  { title: "Feast of the Gaucho",
    location: "east harlem NY",
    date: "dec 18, 2016",
    description: "traditional Argentine barbeque",
    restaurant: "La Familia Argentina"
  },
  { title: "noodle",
    location: "williamsburg brooklyn",
    date: "Dec 4, 2016",
    description:"shanghainese dumplings reimagined with a mediteranean flare" ,
    restaurant: "Pasta and Vino"
  }
];

class ChefNav extends Component {
   constructor(props) {
    super(props);
    this.state = {
      displayMyEvents: true,
      displayNewEventForm: false
    }
  }

  loadEvents() {
    console.log("load events");
    if(this.state.displayMyEvents){
      return <EventsContainer events={dummyData} />;
    }

    if(this.state.displayNewEventForm){
      return <NewEventForm />
    }

  }

  toggleMyEvents() {
    console.log("State ==>", this.state);
    this.setState({
      displayMyEvents: true,
      displayNewEventForm: false
    });
  }

  toggleNewEventForm(){
    this.setState({
      displayMyEvents: false,
      displayNewEventForm: true
    });
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
            <li className="create"><Link to={"/chef"}onClick={this.toggleMyEvents.bind(this)} className='index'>My Events</Link></li>
            <li><Link to={"/chef"} onClick={this.toggleNewEventForm.bind(this)} className='create'>Register New Event</Link></li>
            <li><Link to={"/user"} className='logout'>User</Link></li>
          </ul>
        </div>
        {this.loadEvents()}
      </div>
    );
  }
}

export default ChefNav;