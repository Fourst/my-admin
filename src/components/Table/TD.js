import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination'

export default class TD extends Component{
  
    render(){
     return(
        // <td style={{borderBottom:'1px solid rgba(224, 224, 224, 1)',padding:'14px'}}>{this.props.keys}</td>
        <td style={{borderBottom:'1px solid rgba(224, 224, 224, 1)',padding:'14px'}}>{this.props.keys}</td>
        )
    }        
}
