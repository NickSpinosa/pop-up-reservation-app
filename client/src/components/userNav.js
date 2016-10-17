import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router';

class UserNav extends Component {
  render() {
    return (
      <div className='navigation'>
        <ul>
          <li className="create"><Link to={"/user/my-events"} className='index'>My Events</Link></li>
          <li><Link to={"/user/find-events"} className='create'>Find Events</Link></li>
          <li><Link to={"/chef"} className='logout'>Chef</Link></li>
        </ul>
      </div>
    );
  }
}

export default UserNav