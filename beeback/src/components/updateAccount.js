import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Update , Delete} from '../actions/index'


 class updateAccount extends Component {
     state = {
         ucreds:{
         username: '',
         password: '',
         email: '',
         }
     }
     handlechange = (e) =>{
        e.preventDefault();
        this.setState({
            regcreds:{
            ...this.state.ucreds,
            [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        this.props.Update(this.state.ucreds)
        
     }

  render() {

    return (
        
      <div>
          <h1> Update Info </h1>

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

        <div>
            <button onClick ={ () => this.props.Delete()}> Delete Account </button>
        </div>
      </div>
    )
  }
} 
const mapStateToProps = state =>({
   
})

export default connect (
   mapStateToProps,
   {Update, Delete}
)(updateAccount)