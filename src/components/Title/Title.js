import React, { Component} from 'react';
import Search from "../Search/Search";
import BtnBack from '../BtnBack/BtnBack';
import {MyContext} from '../../page/Panel/Panel';
class Title extends Component {


  render(){
    const COLORMAIN = "#182a4a";
   
    return(
      <div 
      style={{
          height:"50px",
          width:"100%",
          background:COLORMAIN,
      }}
      >
      <MyContext.Consumer>
        {
          (context)=>(

      
        <div className="title_wrap" 
        style={{
            display:"flex",
            alignItems:"center",
            height:"50px",
            justifyContent:"space-between",
            paddingLeft:"15px",
            paddingRight:"15px",
        }}>    

          <div style={{
            display:"flex",
            color:"#fff",
            alignItems:"center"
          }}>
     
            { context.state.boolUserPage?<BtnBack/>: null}
            <div style={{color:'#fff',fontSize:'20px',marginLeft:"10px"}}>{this.props.titleName}</div>
          </div>
            
            <div>
                {/*<Search/>*/}
            </div>
        </div>
           )
          }
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Title;
