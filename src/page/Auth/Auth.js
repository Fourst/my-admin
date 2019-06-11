import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FieldInput from '../../components/TextFieldGroup/FieldInput';
import Panel from '../Panel/Panel';
import axios from 'axios';
import { Route, Redirect } from 'react-router';


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Auth extends Component {

    state={
        reposs: null,
        login: '',
        password: '',
        textRed: 'Error',
        UserName:'',
    }
    handleChangeUserName(e){
        if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
          this.setState({UserName: e.target.value});
        }
      }
    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({
                login: e.target.value,
            })
    }
    handleChangePass = (e) =>{
        console.log(e.target.value);
        this.setState({
                password: e.target.value,
                // password: e.target.name
            })
    }

    getUser = (e) =>{
        e.preventDefault();
      
         const us = {
            login: this.state.value,
            password: this.state.password,
        };
        
        //post
        axios.post('https://hunet.ru', {
            us
          })
          .then(
              resp =>{
                  console.log(resp.login);
              })
         


        //get
        axios.get(`https://api.admin.manana.life/v1/administrator.auth?login=blaze-sk@mail.ru&password=258852`)
            .then((res) => {
                console.log(res);
                const repos  = res.data.token;
                this.setState(
                    {reposs: repos}
                    )
                console.log(repos);
                if(repos){
                    
                    ReactDOM.render(<Panel />, document.getElementById('root'));
                }
                else{
                    alert("404");
                }
            });
            //https://api.admin.blaze-sk.ru/v1/user.list?token=this.token&limit=10
    }

  render(){


    return(

        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">

          <div style={{
                background:'#f3f3f3',
                padding:'20px'
            }}>
           <div style={{
               fontSize:'20px',
               fontWeight:'bold',
               borderRadius:'5px'
           }}>
                Auth-Page
           </div>
            <div>
                 {this.state.reposs? "Верно":"Заполните поле"}
            </div>
                    <FieldInput 
                    {...this.props}
                    getUser={this.getUser}
                    // handleChange={this.handleChange} 
                    // vl={this.state.login} 
                    // vlpass={this.state.password}  
                    // handleChangePass={this.handleChangePass}
                    />
                    {this.state.reposs}
         </div>
        </Container>
      </React.Fragment>

    )
  }
}

export default Auth;


export function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
  }
  



