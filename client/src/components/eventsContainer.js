import React, { Component } from 'react';
import '../index.css';
import EventView from './event.js';


class EventsContainer extends Component {

  displayEvents() {
    console.log("events", this.props.events);

    return this.props.events.map(event => {
     return <EventView id={event.id} register={this.props.register} title={event.name} location={event.location} date={event.date} description={event.description} restaurant={"Manteca Grill"} />;
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.displayEvents()}
        </ul>
      </div>
    );
  }
}

export default EventsContainer;