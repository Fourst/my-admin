import React, { Component} from 'react';
import Title from '../../components/Title/Title';
import {TableCompany} from '../../components/TableCompany/TableCompany';
import DataCompany from '../../components/TableCompany/DataCompany';
export default class Profile extends Component {

  render(){
    const PROFILE = "Company";
    return(
      <div style={{paddingLeft:'50px',paddingRight:"0px"}}>
        <Title titleName={PROFILE}/>
        {/*<TableCompany />*/}
        <DataCompany />
      </div>
    );
  }
}

