import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {SignIn} from '../SignInPage/styledComponent.js';
@observer
class SignInPage extends React.Component{
    @observable username
    @observable password
    @observable errorMessage
    constructor(props){
        super(props)
        this.username=""
        this.password=""
        this.errorMessage=""
    }
    onChangeUsername=()=>{
        
    }
    onChangePassword=()=>{
        
    }
    onClickSignIn=()=>{
        // const reaction1 =reaction(()=>ACCESS_TOKEN,value=>console.log(value))
    }
    render(){
        return(<SignIn>
                <input  onChange={this.onChangeUsername} placeholder="Username"/>
                <input  onChange={this.onChangePassword} placeholder="Password"/>
                <button onClick={this.onClickSignIn}>Submit </button>
            </SignIn>
            )
    }
}
export default SignInPage;

// onSubmit=()=>{
//       const reaction1 =reaction(()=>ACCESS_TOKEN,value=>console.log(value))
//     }
//      gotoGridScreenIfLoggedIn=()=>{
//     return(
//       <Redirect
//       to={{
//         pathname:"/grid-game"
//       }}
//       />
//       );