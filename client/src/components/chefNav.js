import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';

class UserNav extends Component {
  render() {
    return (
      <div className='navigation'>
        <ul>
          <li className="create"><Link to={"/chef/my-events"} className='index'>My Events</Link></li>
          <li><Link to={"/chef/create-event"} className='create'>Register New Event</Link></li>
          <li><Link to={"/user"} className='logout'>User</Link></li>
        </ul>
      </div>
    );
  }
}

export default UserNav