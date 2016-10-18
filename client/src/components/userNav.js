import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';
import EventsContainer from "./eventsContainer.js";
import axios from 'axios';

const dummyData = [
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
  {
    name: "Feast of The Gaucho",
    location: "williamsburg",
    date: "december 10, 2016", 
    description: "traditional argentine barbeque",
    restaurant: "Manteca Grill"
  },
];

class UserNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:dummyData
    }
    //this.loadAllEvents();
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

  renderEvents(){
    console.log("render events");
    if(this.state.events.length !== 0){
      return <EventsContainer events={this.state.events} />;
    }
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
            <li className="create"><Link to={"/user"} onClick={this.loadAllEvents.bind(this)} className='index'>My Events</Link></li>
            <li><Link to={"/user/find-events"} className='create'>Find Events</Link></li>
            <li><Link to={"/chef"} className='logout'>Chef</Link></li>
          </ul>
        </div>
        {this.renderEvents()}
      </div>
    
    );
  }
}

export default UserNav;