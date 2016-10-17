import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App.js';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router"; 

class Routes extends React.Component{
  render() {
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={App} />
        <Route path={"*"} component={App} />
      </Router>
    )
  }
}

render(<Routes/>, document.getElementById('root'));