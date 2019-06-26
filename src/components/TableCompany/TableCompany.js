import React, { Component } from 'react';
import axios from 'axios';

import ShowBtn from '../ShowBtn/ShowBtn';
import { optionalCallExpression, arrayExpression, jsxNamespacedName } from '@babel/types';
import { expression } from '@babel/template';



export function TD (props){
   return <td style={{borderBottom:'1px solid rgba(224, 224, 224, 1)',padding:'14px'}}>{props.keys}</td> 
}



export  class TableCompany extends Component{
    state={
        fio:null,
        search:null,
    }
    componentDidMount(){

         axios.get('https://api.admin.manana.life/v1/company.list?token=765a041139be5e0b1781e6240da308e8ffe1ac8db0ec131f83')
        .then((response) => {

          this.setState({
            fio:response.data.list
          });
         
          
        })
        .catch(function(error){
         console.log("gg");
        })
    }
    

    updateSearch(e){
        console.log(e);
        this.setState({
            search:e.target.value,
        });
    }

    render(){
   
        const { fio } = this.state;
     
        
       const tt = fio && fio.map((item,index) => {
        return (
          
                <tr key={index} >
                    <TD keys={item.id}/>
                    <TD keys={item.profile_id} />
                    <TD keys={item.first_name} />
                    <TD keys={item.second_name} />
                    <TD keys={item.email} />
                    <ShowBtn id={item.id} />
                </tr> 
                           
        )
       });
        return(
            <div>
                <div style={{width:'100%',display:"flex",justifyContent:"center",margin:"5px 0px 5px 0px",
            position:"relative",}} >
                    <input 
                    value = {this.state.search}
              
                    style={{width:"100%",height:"25px",paddingLeft:"15px",fontSize:"16px",border:"none"}} placeholder="Search" 
                    
                    />
                    <div style={{position:"absolute",right:"15px",top:"3px",color:"rgb(173, 173, 173)"}}>
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                
                <table style={{width:'100%',textAlign:'left',tableLayout:'fixed',background:'#fff'}}>
            <thead>
                
                 <tr style={{background:'rgb(238, 244, 255)'}}>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>id</td>            
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}></td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}></td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}></td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}></td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)",maxWidth:"100px"}}>btn</td>
                </tr>
               
            </thead>
            <tbody 
            style={{
                boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                borderRadius:"4px",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}>      
                 {tt}
            </tbody>
        </table>
            </div>
        )
    }

}