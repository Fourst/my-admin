import React, { Component } from 'react';
import {Redirect,Link  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import './style.css';
import axios from './../../service';
// import { Link } from '@material-ui/core';


class Fieldinput extends Component {

  state={
      login:"blaze-sk@mail.ru",
      password:"258852",
      // login:"",
      // password:null,
      referrer: null,
      navigate: false,
      // token:null,
  }
 
  changeLogin = (e) =>{
     this.setState({
        login: e.target.value
    });
  }
  changePass = (e) =>{
    this.setState({
       password: e.target.value
   });
 }
 
  getUser = (e) => {
  
    e.preventDefault();

    
 
   const { login, password} = this.state;

    
    axios.get('v1/administrator.login?login=' +`${login}` + '&password=' +`${password}`)
              .then(
                  
                  resp =>{
                    const TOKENUSER = resp.data.token;

                    window.localStorage.setItem("token",`${TOKENUSER}`);

                    let GETTOKEN = localStorage.getItem("token");

                    if (GETTOKEN === "undefined" ){
                        this.setState({navigate: false})

                    }
                      if (GETTOKEN !== "undefined" ){
                          this.setState({navigate: true})

                      }

                  })
              .catch(function(error){
                    console.log("Auth error");
               })

               
  }
//

  render(){

    return(
      <React.Fragment>
      {
          this.state.navigate?
          <Redirect to='/home'/>:
            <form onSubmit={this.props.getUser}>
        <Box display="flex" marginTop="" flexDirection="row" alignItems="center" justifyContent="center">

        <TextField
                style={{
                  marginTop:'0px',
                }}
        id="standard-password-input"
        label="Email"
        type="mail"
        autoComplete="current-password"
        margin="normal"
        name="loginName" 
        data-name="username" 
        value={this.state.login} 
        onChange={(e)=>{this.changeLogin(e)}}

      />
        <TextField
        style={{
          marginTop:'0px',
          marginLeft:'30px',
          marginRight:'30px',
        }}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        data-name="password" 
        value={this.props.vlpass}
        onChange={(e)=>{this.changePass(e)}}
      />
     
        <Button  className="btn-novaya nabegnya btnAuthClr" variant="contained" onClick={(e)=>this.getUser(e)}>
          Войти
        </Button>
        </Box>
      </form>
      }</React.Fragment>
    )
  }
//   render() {
//     const {referrer} = this.state;
//     if (referrer) return <Redirect to={referrer} />;
    
// }
}

export default Fieldinput;
