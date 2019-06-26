import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { keys } from '@material-ui/core/styles/createBreakpoints';

export default class SideBarBlock extends Component{
  
  render(){

  return (
    <div style={{height:"100%"}}>
        <div className="sidebar_block" 
        style={{
          width:"50px",
          height:"100%",
          color:"#fff",
          display:'flex',
          justifyContent:"center",
          alignItems:'center',
          position:"relative",
          height:"100%",
          top:"0"
        }}>
          {/* <Link to='/home' style={{color:'#fff'}}>
          <i className={`fas + ${this.props.icon}`}></i>
          </Link> */}
          <ul 
          style={{
            padding:'0px',
            listStyle:'none',
            color:"#fff",
            margin:'0',
            height:'100%'
          }}
          >
            <li style={{
              width:"50px",
              height:"50px",
              display:'flex',
              alignItems:"center",
              justifyContent:'center',
              borderBottom:"1px solid #e8e8e8a6",
            }}> 
              <Link to="/home" style={{
                color:'#ffff'
                }}>
              <i className={`fas fa-home`}></i>
              </Link>
            </li>
            <li style={{
              width:"50px",
              height:"50px",
              display:'flex',
              alignItems:"center",
              justifyContent:'center',
               borderBottom:"1px solid #e8e8e8a6",
            }}> 
            <Link to="/home" style={{
              color:'#ffff'
              }}>
               <i className={`fas fa-id-card`}></i>
               </Link>
            </li>
            <li style={{
              width:"50px",
              height:"50px",
              display:'flex',
              alignItems:"center",
              justifyContent:'center',
               borderBottom:"1px solid #e8e8e8a6",
            }}> 
            <Link to="/prof" style={{
              color:'#ffff'
              }}>
            <i className={`fas fa-briefcase`}></i>
            </Link>
            </li>


            {/* more fake blocks */}


          </ul>
          {/* Exit */}
          <ul 
          style={{
            padding:'0px',
            listStyle:'none',
            color:"#fff",
            margin:'0',
            position:'absolute',
            bottom:'0px',
            right:'0',
            width:"50px",
            height:"50px"
          }}
          >
            <li style={{
              width:"50px",
              height:"50px",
              display:'flex',
              alignItems:"center",
              justifyContent:'center',
              borderBottom:"1px solid #e8e8e8a6",
            }}> 
              <Link to="/" style={{
                color:'#ffff'
                }}>
              <i class="fas fa-sign-out-alt"></i>
              </Link>
            </li>
            </ul>
        </div>
       
    </div>
  )
  }
}