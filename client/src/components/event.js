import '../index.css';
import React, { Component } from 'react';

const EventView = (props) => {
  console.log("props",props);
  return (
    <div className="event">
      <div>
        <h2>{props.title}</h2>
        <h3>{props.location + " " + props.date}</h3>
      </div>
      <p>{props.description}</p>
      <h4>{"--" + props.restaurant}</h4>
    </div>
  );
}

export default EventView;