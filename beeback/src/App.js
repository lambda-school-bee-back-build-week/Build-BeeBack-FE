import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Loginpage from "./components/loginpage"
import Registerpage from "./components/registerpage"
import Main from "./components/main"
import PrivateRoute from './components/privateroute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <nav>
          <Link  to = "/"> Login</Link>
          <Link to = '/registerpage'> Register </Link>
          <Link to = "/main"> Main </Link>

        </nav>
        </div>

      <Route   exact path = "/" component = {Loginpage}/>
      <Route path = "/registerpage" component = {Registerpage}/>
      <PrivateRoute path = '/main'   component ={Main}/>

        
      </div>
    );
  }
}

export default App;
