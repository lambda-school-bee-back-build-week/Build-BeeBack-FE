import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/index'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Loginbox = styled.div`

display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
height: 400px;
width: 500px;
margin: 0 auto;
border-radius: 20px;
-webkit-box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
-moz-box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
box-shadow: 10px 10px 23px 0px rgba(140,127,140,1);
`
const LoginInput = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items:center;
height: 200px;
/* margin-bottom: 200px; */
`
const InputField = styled.input`
border: none;
border-bottom: 1px solid black;
background-color: none;
text-align:center;
margin:20px;
width: 300px;
padding: 5px;
outline: none;
font-size: 24px;

`
const Title = styled.h1`
text-align: center;
;
`
const SubTitle = styled.h1`
text-align: center;
;
`
const Links = styled.h3`
  padding: px;
  text-decoration: none;
  color: black;
`;
const Button = styled.button`
background-color: goldenrod;
width: 300px;
padding: 10px;
color: black;
font-size: 24px;
border-radius: 10px;
outline: none;
`


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
      if(this.props.isloggedin){
        this.props.history.push("/main")
      }
    
    // console.log(this.props.loggedin, this.props.isfetching)
    return (
        
      <div className = "loginPage" >
        <Title>We'll Bee Back</Title>
        <Loginbox>
          
         
        <form onSubmit ={this.handleSubmit}>
        <SubTitle> Login </SubTitle>
        <LoginInput> 
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

        <Button value ="submit">Login</Button>
        <Link style={{ textDecoration: 'none' }}to = '/registerpage'><Links> Register </Links></Link>
        </LoginInput>



        

        </form>
        
        </Loginbox>
      </div>
    )
  }
}
 const mapStateToProps = state =>({
      isloggedin:state.loggingIn,
      
 })

export default connect (
    mapStateToProps,
    {loginSuccess}
)(Loginpage)