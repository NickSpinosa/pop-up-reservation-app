import React from 'react';
import {render} from 'react-dom';
import UserNav from './components/userNav.js';
import ChefNav from './components/chefNav.js';
import Error from "./components/errorComponent.js";
import Signup from "./components/signupContainer.js";
import Signin from "./components/loginContainer.js";
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from "react-router"; 

class Routes extends React.Component{
  render() {
    return(
      <Router history={browserHistory}>
        <Route path={"/"} component={Signup}/> 
        <Route path={"/signup"} component={Signup}/>
        <Route path={"/signin"} component={Signin}/>
        <Route path={"/user"} component={UserNav}/>
        <Route path={"/chef"} component={ChefNav}/>
        <Route path={"*"} component={Error} />
      </Router>
    )
  }
}

render(<Routes/>, document.getElementById('root'));