import React, { Component } from 'react';
import Title from '../Title/Title';
import {MyContext,MyProvider} from '../../page/Panel/Panel';
import axios from 'axios';
import {TD} from '../../components/Table/Table';


export default class User extends Component  {
    
    state ={
        idProf:null,
        idId:null,
        idEmail:null,
        idName:null,
    }
    componentDidMount(){
       

        axios.get('https://api.admin.manana.life/v1/user.profile?id='+`${this.props.ids}`+'&token=765a041139be5e0b1781e6240da308e8ffe1ac8db0ec131f83')
       .then((response) => {
            
         this.setState({
           idProf: response.data,
           idId: response.data.id,
           idEmail:response.data.email,
           idName:response.data.first_name,
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
                    
                    <Title style={{marginLeft:"65px"}} titleName={USER + `${context.state.id}`}/>
                    <div style={{marginLeft:"15px"}}>
                        <div >Email:{this.state.idEmail}</div>
                        <div>Name:{this.state.idName}</div>
                    </div>
                    
                
                    </div>
                )
         }
        
    </MyContext.Consumer>
    </div>
  );
}
}
