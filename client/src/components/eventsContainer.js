import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';

class EventsContainer extends Component {
  displayEvents() {
    this.props.events.map(event => {
      //render events
    });
  }
  render() {
    return (
      <div>
        <ul>
          {displayEvents()}
        </ul>
      </div>
    );
  }
}

export default EventsContainer;