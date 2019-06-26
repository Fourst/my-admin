import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import User from '../../components/User/User';
import { BrowserRouter as Router, Route, Switch, withRouter,withProps } from "react-router-dom";
import {MyContext,MyProvider} from '../../page/Panel/Panel';


export default class ShowBtn extends Component  {

    state = {
        id:this.props.id,
        newId: null,
    }


 render(){

  const TITLE_HOME = 'Profile';
  
  return (  
    <td style={{borderBottom:'1px solid rgba(224, 224, 224, 1)',display:"flex",justifyContent:"center",alignItems:"center",height:"70px",}}>
        
    <MyContext.Consumer>
       
       {
         (context) =>(
            <div style={{cursor:"poiner",}}>
            <Link to={'/user/id/'+`${this.state.id}`} >
                
                <button onClick={context.getID} id={this.state.id} style={{
                    background:'#ffff',
                    border:"1px solid #a2a2a2f2",
                    padding:"8px 15px",
                    borderRadius:"4px",
                    cursor:"poiner",
                    fontSize:"14px",
                    color:"#333333f2",
                    boxShadow:"0px 1px 3px 0px rgba(0,0,0,0.35)"
                }}>
                    <i class="far fa-edit" style={{marginRight:'5px'}}></i>
                    Редактировать</button>
            </Link>               
            </div>

         )
       }
     </MyContext.Consumer>
    </td>
  );
}
}
