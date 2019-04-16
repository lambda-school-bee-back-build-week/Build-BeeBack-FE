import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Loginpage from "./components/loginpage"
import Registerpage from "./components/registerpage"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <nav>
          <Link  to = "/"> Login</Link>
          <Link to = '/registerpage'> Register </Link>
        </nav>
        </div>

      <Route   exact path = "/" component = {Loginpage}/>
      <Route path = "/registerpage" component = {Registerpage}/>

        
      </div>
    );
  }
}

export default App;
