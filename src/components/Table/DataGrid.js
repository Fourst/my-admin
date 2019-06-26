import React, { Component } from 'react';
import axios from 'axios';
import { TD } from '../TableCompany/TableCompany';
import ShowBtn from '../ShowBtn/ShowBtn';


export default class DataGrid extends Component{
    state={
        users:null,
        currentP:1,
        pageNumb:1,
        allPages:null,
    }


    componentDidMount(){
        const tkn = window.localStorage.setItem("token","e1cd2e50646f90b8c52044a8e2f8a7f769e9ab9510202a14ed");
        const gettkn = window.localStorage.getItem("token");
        axios.get('https://api.admin.manana.life/v1/user.list',{
            params:{
                token: gettkn,
                page: this.state.currentP,
            }
        })
            .then((response) => {
                this.setState({
                    users: response.data.content,
                    currentP:response.data.current_page,
                    allPages:response.data.count_page
                })
            })
            .catch(function(error){
                console.log("gg");
            })




    }

    onPlus(){
        const tkn = window.localStorage.setItem("token","e1cd2e50646f90b8c52044a8e2f8a7f769e9ab9510202a14ed");
        const gettkn = window.localStorage.getItem("token");
        axios.get('https://api.admin.manana.life/v1/user.list',{
            params:{
                token: gettkn,
                page: this.state.currentP+1,
            }
        })
            .then((response) => {
                this.setState({
                    users: response.data.content,
                    currentP:response.data.current_page++
                })
            })
            .catch(function(error){
                console.log("gg");
            })

    }

    onMinus(){
        const tkn = window.localStorage.setItem("token","e1cd2e50646f90b8c52044a8e2f8a7f769e9ab9510202a14ed");
        const gettkn = window.localStorage.getItem("token");
        axios.get('https://api.admin.manana.life/v1/user.list',{
            params:{
                token: gettkn,
                page: this.state.currentP-1,
            }
        })
            .then((response) => {
                this.setState({
                    users: response.data.content,
                    currentP:response.data.current_page--
                })
            })
            .catch(function(error){
                console.log("gg");
            })

    }
    render(){
        console.log(this.state.users);
        console.log(this.state.currentP);
        console.log(this.state.pageNumb);
        const { users } = this.state;
        const arrUserMap  = users && users.map((item,index)=>{
            return(

                <tr key={index} >
                    <TD keys={item.id}/>
                    <TD keys={item.profile_id} />
                    <TD keys={item.first_name} />
                    <TD keys={item.last_name} />
                    <TD keys={item.second_name} />
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

                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"90vh"}}>
                    <table style={{width:'100%',textAlign:'left',tableLayout:'fixed',background:'#fff'}}>
                        <thead>

                        <tr style={{background:'rgb(238, 244, 255)'}}>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>id</td>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>profile_id</td>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>name</td>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>surname</td>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)"}}>email</td>
                            <td style={{padding:'14px',color:"rgba(0, 0, 0, 0.54)",maxWidth:"100px"}}>btn</td>
                        </tr>

                        </thead>
                        <tbody
                            style={{
                                boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
                                borderRadius:"4px",
                                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            }}>
                        {arrUserMap}
                        </tbody>

                    </table>

                    <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                        {
                            this.state.currentP === 1 ? <button disabled onClick={() => this.onMinus()} style={{background:"transparent",border:"none",width:"30px",height:"30px"}}>
                                    <i class="fas fa-chevron-left"></i>
                                </button>:
                                <button onClick={() => this.onMinus()} style={{background:"transparent",border:"none",width:"30px",height:"30px"}}>
                                    <i class="fas fa-chevron-left"></i>
                                </button>

                        }

                        <div style={{margin:"0px 10px",fontSize:"16px"}}>{this.state.currentP} / {this.state.allPages}</div>

                        {
                            this.state.currentP < this.state.allPages ? <button onClick={() => this.onPlus()} style={{background:"transparent",border:"none",width:"30px",height:"30px",marginRight:"25px"}}>
                                    <i class="fas fa-chevron-right"></i>
                                </button> :
                                <button disabled onClick={() => this.onPlus()} style={{background:"transparent",border:"none",width:"30px",height:"30px",marginRight:"25px"}}>
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}