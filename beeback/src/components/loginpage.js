import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/index'


 class Loginpage extends Component {
     state = {
         creds:{
         username: '',
         password: ''
         }
     }
     handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            creds:{
            ...this.state.creds,
            [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        this.props.loginSuccess(this.state.creds)
        
     }

  render() {
    //   if(this.props.isloggedin){
    //     this.props.history.push("/friendlist")
    //   }
    
    // console.log(this.props.loggedin, this.props.isfetching)
    return (
        
      <div>
          


          <h1> Login Page </h1>
        <form onSubmit ={this.handleSubmit}>
        <input onChange = {this.handlechange}
        type ="text"
        placeholder ='username'
        name = "username"
        value = {this.state.username}
        
        />
        <input onChange = {this.handlechange}
        type ="password"
        placeholder ='password'
        name = "password"
        value = {this.state.password}
        
        />

        <button value ="submit">submit</button>


        

        </form>
      </div>
    )
  }
}
 const mapStateToProps = state =>({
    //   isloggedin:state.loggingIn,
    //   isfetching:state.isfetching
 })

export default connect (
    mapStateToProps,
    {loginSuccess}
)(Loginpage)