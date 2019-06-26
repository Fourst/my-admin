import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {Table} from '../../components/Table/Table'
import Title from '../../components/Title/Title';
import DataGrid from '../../components/Table/DataGrid';
import Pagination from '../../components/Pagination/Pagination';



export default class Home extends Component  {
  
 render(){
    // console.log(this.state.name);
  const TITLE_HOME = 'Profile';
  return (  


      <div  style={{paddingLeft:'50px',paddingRight:"0px"}}>
      
      <Title titleName={TITLE_HOME}/>
     
      <DataGrid/>
      
      </div>
   
   
  );
}
}
