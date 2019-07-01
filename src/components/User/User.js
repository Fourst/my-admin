import React, { Component } from 'react';
import Title from '../Title/Title';
import {MyContext,MyProvider} from '../../page/Panel/Panel';
import axios from 'axios';
import {TD} from '../../components/Table/Table';


export default class User extends Component  {
    
    state ={
        idProf:null,
        idId:null,
        idName:null,
        idLastName:null,
    }
    componentDidMount(){

        const TOKEN = window.localStorage.getItem("token");
        axios.get('https://api.admin.manana.life/v1/user.profile?id='+`${this.props.ids}`+'&token='+`${TOKEN}`+ '')
       .then((response) => {
            
         this.setState({
           idProf: response.data,
           idId: response.data.id,
           idName:response.data.last_name,
           idLastName:response.data.first_name,
         });

         console.log(response.data);
       })
       .catch(function(error){
            console.log("gg");
       })
   }


  render(){
        const USER = "USER";
        
  return ( 
      
    <div style={{borderBottom:'1px solid rgba(224, 224, 224, 1)'}}>
     <MyContext.Consumer>
         {
                (context) =>(
                    
                    <div style={{paddingLeft:'50px',paddingRight:"0px"}}>
                    
                    <Title style={{marginLeft:"65px"}} titleName={"ID: "+`${context.state.id}`}/>
                    <div style={{marginLeft:"15px"}}>
                        <div >Name:{this.state.idName}</div>
                        <div>Last name:{this.state.idLastName}</div>
                    </div>
                    
                
                    </div>
                )
         }
        
    </MyContext.Consumer>
    </div>
  );
}
}
