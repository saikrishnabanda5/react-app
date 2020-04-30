import React from 'react';
import {Redirect } from "react-router-dom";
import {observer} from 'mobx-react';
import {observable,reaction} from 'mobx';
import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';
@observer
class LoginPage extends React.Component{
    @observable redirectToPage
    constructor(props){
        super(props);
        this.redirectToPage=false;
    }
    onSubmit=()=>{
       const reaction1 =reaction(()=>ACCESS_TOKEN,value=>console.log(value))
    }
     gotoGridScreenIfLoggedIn=()=>{
    return(
      <Redirect
      to={{
        pathname:"/grid-game"
      }}
      />
      );
  }
    render(){
            if(this.redirectToPage){
      return this.gotoGridScreenIfLoggedIn()
    }
        return(<div style={{margin:"40px"}}>
            <input style={{border:"1px solid black"}} placeholder="Username"/>
            <input style={{border:"1px solid black"}}placeholder="Password"/>
            <button onClick={this.onSubmit}>Submit </button>
            </div>);
    }
}


export default LoginPage;