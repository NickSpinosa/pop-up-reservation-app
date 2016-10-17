import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';
import EventsContainer from "./eventsContainer.js";

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

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMyEvents: false
    }
  }

  loadEvents() {
    console.log("load events");
    if(this.state.displayMyEvents){
      return <EventsContainer events={dummyData} />;
    }
  }

  toggleMyEvents() {
    console.log("State ==>", this.state);
    this.setState({
      displayMyEvents: true,
      displayAllEvents: false
    });
  }

  toggleAllEvents(){
    this.setState({
      displayMyEvents: false,
      displayAllEvents: true
    });
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
            <li className="create"><Link onClick={this.toggleMyEvents.bind(this)} className='index'>My Events</Link></li>
            <li><Link to={"/user/find-events"} className='create'>Find Events</Link></li>
            <li><Link to={"/chef"} className='logout'>Chef</Link></li>
          </ul>
        </div>
        {this.loadEvents()}
      </div>
    
    );
  }
}

export default UserNav;