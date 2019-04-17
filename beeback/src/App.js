import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Loginpage from "./components/loginpage"
import Registerpage from "./components/registerpage"
import Main from "./components/main";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <Link to="/main">Main</Link>
            <Link to="/"> Login</Link>
            <Link to='/registerpage'> Register </Link>
          </nav>
        </div>

        <Route exact path="/" component={Loginpage} />
        <Route path="/registerpage" component={Registerpage} />
        <Route path="/main" component={Main} />


      </div>
    );
  }
}

export default App;
