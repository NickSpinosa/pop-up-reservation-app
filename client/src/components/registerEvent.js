import '../index.css';
import React, { Component } from 'react';

class NewEventForm extends Component {
  
  render(){
    return (
      <div>
        <form  >
          <label>Title</label>
          <input id="title" type="text" ref="text" placeholder='Title'  />

          <label>Date</label>
          <input id="date" type="text" ref="text" placeholder='Date'  />

          <label>Location</label>
          <input id="location" type="text" ref="text" placeholder='Location'  />

          <label>Description</label>
          <textarea id="description" rows="4" placeholder='Description'></textarea>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewEventForm