import React, { Component } from 'react';
import axios from 'axios';
import FieldInput from '../../components/TextFieldGroup/FieldInput';

class Form extends Component {

    
    

    componentDidMount(){
        axios.get(`https://api.admin.blaze-sk.ru/v1/user.auth?login=blaze-sk@mail.ru&password=dfdfdf`)
            .then(res =>{
                console.log(res.data);
                this.setState({token: res.data});
            })
    }

  render() {
      
    return(
      <div>

      </div>
    )
  }
}

export default Form;
