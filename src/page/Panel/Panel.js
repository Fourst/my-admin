import React, { Component } from 'react';
import SideBarBlock from '../../components/SideBarBlock/SideBarBlock';

import Wrap from '../Wrap/Wrap';

export const MyContext = React.createContext();

export class MyProvider extends Component{
    state={
      id:0,
      boolUserPage: false,
    }
    render(){
      console.log(this.state.boolUserPage);
      return(
        <MyContext.Provider value={{
          state: this.state,
          getID: (e)=>this.setState({
            id: e.target.attributes.getNamedItem('id').value,
            boolUserPage: true
          }),
          backFalse: ()=>this.setState({
            boolUserPage:false
          }),
        }}>
          {
            this.props.children
          }
        </MyContext.Provider>
      )
    }
  }



export default class Panel extends Component{
  
  state={
    arr:["fa-home","fa-id-card","fa-briefcase","fa-map-marker-alt"],
    link:["home","portfolio"],
  }
  
  render(){
  const COLORMAIN = "#182a4a";
    //Установить стили опасити в ноль , если токен тру
  
  return (
    <div >
      
      <MyContext.Consumer>
      {
                (context) =>(
      <MyProvider>
      <div className="sideBarWrap"
   
      style={{
        background:COLORMAIN,
        position:"absolute",
        height:"100%",
        width:"50px",
        // opacity:`1`
      }}

      >
        
        <SideBarBlock  link={this.state} />
      </div>
      <Wrap/>
      </MyProvider>
                
          )}
      </MyContext.Consumer>    
    </div>

  )
  }
}