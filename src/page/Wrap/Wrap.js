import React, { Component} from 'react';

import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import TableCompany from '../../components/TableCompany/TableCompany';
import Title from '../../components/Title/Title';
import {Main} from '../../page/Main/Main';
import User from '../../components/User/User';
import {MyContext,MyProvider} from '../../page/Panel/Panel';
import Auth from '../Auth/Auth';



class Wrap extends Component {
 
  render(){
    window.localStorage.setItem("token",null);
    
    return(
    
             <MyContext.Consumer>
             {
                (context) =>(  
                <div> 
                <Route path="/" exact component={Main} />
                <Route path="/home"  component={Home} />
                <Route path="/prof"  component={Profile} />
                <Route path="/user/id"  component={()=> <User ids={context.state.id}/>} />
                </div>
                ) 
              }    
             </MyContext.Consumer>                  
     
    );
  }
}

export default Wrap;
