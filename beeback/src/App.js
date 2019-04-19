import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Loginpage from "./components/loginpage"
import Registerpage from "./components/registerpage"
import Main from "./components/main"
import PrivateRoute from './components/privateroute'
import UpdateAccount from './components/updateAccount'
import styled from 'styled-components'; //styled components 
/*________________________________________________________*/
const Navbar = styled.nav`
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  padding: 20px;
  justify-content: center; 
  text-decoration: none;
  background: url('https://cdn2.vectorstock.com/i/1000x1000/13/81/honeycomb-with-honey-background-vector-3621381.jpg') no-repeat fixed center;
  margin-bottom: 100px;
`;

const Links = styled.h3`
  padding: 20px;
  text-decoration: none;
  color: black;
`;
/*------------------------------------------------------*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="navbar">
        <Navbar>
          <Link style={{ textDecoration: 'none' }}to = "/"><Links> Login </Links></Link>
          
          <Link style={{ textDecoration: 'none' }}to = "/main"><Links> Data </Links></Link>
          {/* <Link style={{ textDecoration: 'none' }}to = '/update'><Links> Edit Profile </Links></Link> */}

        </Navbar>
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
