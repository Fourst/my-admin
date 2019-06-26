import React, { Component} from 'react';
import Auth from '../Auth/Auth';



export class Main extends Component {

  

  // componentDidMount(){
  //   this.CheckToken();
  // }

  // CheckToken = async() => {
  //   // const userToken = await AsyncStorage.getItem('userToken');
  //   const userToken = localStorage.getItem('userToken');

  //   if(userToken == null){
  //     console.log("localStorage:","token pustoy");
  //     return true;
  //   }
  //   fetch('https://api.admin.manana.life/v1/administrator.check?token='+userToken, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       token: userToken,
  //     },
  //   })
  //   .then((response) => response.json())

  //     .catch((error) =>{alert(error);});

  //   }
  render(){
    return(
      <div 
      style={{
        
       
      }}
      >
       
       <Auth/>
   
        
      </div>
    );
  }
}


