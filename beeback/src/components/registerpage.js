import React, { Component } from 'react'
import {connect} from 'react-redux'
import {regSuccess} from '../actions/index'
import styled from 'styled-components'


const Regbox = styled.div`

display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
height: 400px;
width: 500px;
margin-top: 100px;
margin: 0 auto;
border-radius: 20px;
-webkit-box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
-moz-box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
`
const RegInput = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
height: 200px;

`
const InputField = styled.input`
border: none;
border-bottom: 1px solid black;
background-color: none;
text-align:center;
margin:20px;
width: 300px;
padding: 10px;
outline: none;
font-size: 15px;

`
const Button = styled.button`
background-color: goldenrod;
width: 300px;
padding: 10px;
color: black;
font-size: 24px;
border-radius: 10px;
`
const Title = styled.h1`
text-align: center;
margin-bottom: 50px;
`
;

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
            ...this.state.regcreds,
            [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        this.props.regSuccess(this.state.regcreds).then(this.props.history.push("/main"))
        
     }
     
  render() {
    // console.log(this.props.loggedin, this.props.isfetching)
    return (
          
        <div classNam ="registerpage">
      <Regbox>
          <Title> Register </Title>

        <form onSubmit ={this.handleSubmit}>
        <RegInput>
        <InputField onChange = {this.handlechange}
        type ="text"
        placeholder ='username'
        name = "username"
        value = {this.state.username}
        
        />
        <InputField onChange = {this.handlechange}
        type ="password"
        placeholder ='password'
        name = "password"
        value = {this.state.password}
        
        />
        <InputField onChange = {this.handlechange}
        type ="email"
        placeholder ='email'
        name = "email"
        value = {this.state.email}
        
        />

        <Button value ="submit">Register</Button>


        </RegInput>

        </form>
        
        </Regbox>
      </div>
      )
    }
}
 const mapStateToProps = state =>({
   isloggedin:state.loggingIn,
   
 })

export default connect (
    mapStateToProps,
    {regSuccess}
)(Registerpage)
