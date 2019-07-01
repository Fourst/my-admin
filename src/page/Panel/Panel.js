import React, { Component } from 'react';
import SideBarBlock from '../../components/SideBarBlock/SideBarBlock';

import Wrap from '../Wrap/Wrap';
import axios from "axios";

export const MyContext = React.createContext();

export class MyProvider extends Component{
    state={
      id:0,
      idC:0,
      boolUserPage: false,
      boolUserPageC: false,
    }
    render(){

      return(
        <MyContext.Provider value={{
          state: this.state,
          getID: (e)=>this.setState({
            id: e.target.attributes.getNamedItem('id').value,
            boolUserPage: true
          }),
          getIDComp: (e)=>this.setState({
                idC: e.target.attributes.getNamedItem('id').value,
                // boolUserPage: true
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
    componentWillMount() {
      console.log("checkTok");
      this.checkToken();
    }

    checkToken = () => {
        // const tkn = window.localStorage.setItem("token","e1cd2e50646f90b8c52044a8e2f8a7f769e9ab9510202a14ed");
        const gettkn = window.localStorage.getItem("token");
        axios.get('https://api.admin.manana.life/v1/administrator.check',{
            params:{
                token: gettkn,
                // page: this.state.currentP+1,
            }
        })
            .then((response) => {
                console.log(response.data.status)

            })
            .catch(function(error){
                alert('Ошибка сервера'+error);
                console.log(error.data.status)
            })
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
        // left:"-100px",
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