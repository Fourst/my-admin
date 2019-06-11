import React, { Component } from 'react';
import { Redirect, Router, Route, Link} from 'react-router-dom';
import Panel from '../../page/Panel/Panel'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

class Fieldinput extends Component {



  render(){
    
    return(
      
      <form onSubmit={this.props.getUser}>
        <Box display="flex" marginTop="" flexDirection="row" alignItems="center" justifyContent="center">
          {/* <input type="text" name="loginName" data-name="username"  value={this.props.vl} onChange={this.props.handleChange}/>
          
          <input type="text" data-name="password" value={this.props.vlpass} onChange={this.props.handleChangePass}/> */}
          {/* <button >Submit</button> */}
        {/* <button onClick={this.setRedirect}>wfwef</button>  */}
        
        <TextField
                style={{
                  marginTop:'0px',
            
                }}
        id="standard-password-input"
        label="Email"
        type="mail"
        autoComplete="current-password"
        margin="normal"
        name="loginName" 
        data-name="username" 
        value={this.props.vl} 
        onChange={this.props.handleChange}

      />
        <TextField
        style={{
          marginTop:'0px',
          marginLeft:'30px',
          marginRight:'30px',
        
        }}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"

        data-name="password" 
        value={this.props.vlpass} 
        onChange={this.props.handleChangePass}
      />
     
        <Button heig className="btn-novaya nabegnya" variant="contained" color="primary" style={{background:'#72e549',marginTop:'15px'}}> 
        <button style={{
          background:"transparent",
          border:'0',
          color:'#fff',
          fontSize:'16px'
        }}>
          Verify</button>
        </Button>
        </Box>
      </form>

    )
  }
}

export default Fieldinput;
