import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Loginpage from "./components/loginpage"
import Registerpage from "./components/registerpage"
import Main from "./components/main"
import PrivateRoute from './components/privateroute'
import UpdateAccount from './components/updateAccount'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <nav>
          <Link  to = "/"> Login</Link>
          <Link to = '/registerpage'> Register </Link>
          <Link to = "/main"> Main </Link>
          <Link to = '/update'>Edit Profile</Link>

        </nav>
        </div>

      <Route   exact path = "/" component = {Loginpage}/>
      <Route path = "/registerpage" component = {Registerpage}/>
      <PrivateRoute path = '/main'   component ={Main}/>
      <PrivateRoute path = '/update' component ={UpdateAccount}/>

        
      </div>
    );
  }
}

export default App;
