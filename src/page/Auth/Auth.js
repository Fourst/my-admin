import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FieldInput from '../../components/TextFieldGroup/FieldInput';
import Panel from '../Panel/Panel';
import axios from 'axios';
import './style.css';


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
    }

  render(){

    console.log(this.state.login);

    return(

        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">

          <div className="AuthWrap">
           <div className="AuthMiddleWear">
                Auth-Page
           </div>
            <div>
                 {/* {this.state.reposs? "Верно":"Заполните поле"} */}
            </div>
                    <FieldInput />
         </div>
        </Container>
      </React.Fragment>

    )
  }
}

export default Auth;


// export function SimpleContainer() {
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <Container maxWidth="sm">
//           <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
//         </Container>
//       </React.Fragment>
//     );
//   }
  



