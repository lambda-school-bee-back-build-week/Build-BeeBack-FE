import React, { Component } from 'react'
import {connect} from 'react-redux'


 class Registerpage extends Component {
     state = {
         regcreds:{
         username: '',
         password: '',
         email: '',
         }
     }
     handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            regcreds:{
            ...this.state.creds,
            [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        // this.props.loginSuccess(this.state.creds)
        
     }

  render() {
    //   if(this.props.isloggedin){
    //     this.props.history.push("/friendlist")
    //   }
    
    // console.log(this.props.loggedin, this.props.isfetching)
    return (
        
      <div>
          <h1> Register </h1>
          
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
        <input onChange = {this.handlechange}
        type ="email"
        placeholder ='email'
        name = "email"
        value = {this.state.email}
        
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
)(Registerpage)
