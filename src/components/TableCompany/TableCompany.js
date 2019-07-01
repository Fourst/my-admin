import React, { Component } from 'react';
import axios from 'axios';


import ShowBtn from "../ShowBtn/ShowBtn";
import ShowBtnCompany from "../ShowBtn/ShowBtnCompany";



export function TD (props){
   return <td style={{borderBottom:'1px solid rgba(224, 224, 224, 1)',padding:'14px'}}>{props.keys}</td> 
}



export  class TableCompany extends Component{
    state={
        fio:null,
        search:'',
    }
    componentDidMount(){
         const TOKEN = window.localStorage.getItem("token");
         axios.get('https://api.admin.manana.life/v1/company.list?token='+`${TOKEN}`+'')
        .then((response) => {
            console.log(response.data.content);
          this.setState({
            fio:response.data.content
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
                    <TD keys={item.title} />
                    <TD keys={item.balance} />
                    <TD keys={item.rating} />
                    <TD keys={item.rating} />
                    <TD keys={item.rating} />
                    <ShowBtnCompany id={item.id} />
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
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                
                <table style={{width:'100%',textAlign:'left',tableLayout:'fixed',background:'#fff'}}>
            <thead>
                
                 <tr style={{background:'rgb(238, 244, 255)'}}>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>id</td>            
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>title</td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>balance</td>
                    <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>rating</td>
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