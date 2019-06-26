import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MyContext,MyProvider} from '../../page/Panel/Panel';
export default class BtnBack extends Component{
    render(){
        return(
            <MyContext.Consumer>
        {
         (context) =>(
            <div>
                <Link to="/home">
                    <div style={{color:'#fff',cursor:"pointer"}} onClick={context.backFalse}>       
                            <i class="fas fa-caret-left"></i>
                    </div>
               </Link>
            </div>
             )
        }
            </MyContext.Consumer>
        )
    }
}