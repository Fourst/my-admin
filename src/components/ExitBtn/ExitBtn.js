import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "../../service";

export default class ExitBtn extends Component {

    signOut = (e)=>{
        const GETTOKEN = window.localStorage.getItem("token");
        console.log(GETTOKEN);
        axios.get(`https://api.admin.manana.life/v1/administrator.logout?token=`+`${GETTOKEN}`+``)
            .then(resp =>{
                console.log( resp.data.status ,"ExitOut");
                window.localStorage.setItem("token",null);
            })
            .catch(function(error){
                console.log("Out error");
            })
    }
    render() {
        return(
                <Link to="/" style={{
                    color:'#ffff'
                }}>
                    <div onClick={(e)=>this.signOut(e)} title="Выход">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </Link>


        )
    }
}