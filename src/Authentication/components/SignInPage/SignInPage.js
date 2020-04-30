import React from 'react';
import {observer,inject} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {observable} from 'mobx';
import {SignIn,Input,Details,ErrorMessage,SignInButton} from '../SignInPage/styledComponent.js';
import {getAccessToken} from '../../utils/StorageUtils.js';
@inject('authStore')
@observer
class SignInPage extends React.Component{
    @observable username
    @observable password
    @observable errorMessage
    constructor(props){
        super(props)
        this.userName=""
        this.password=""
        this.errorMessage=""
    }
    onChangeUsername=(event)=>{
        this.userName=event.target.value
    }
    onChangePassword=(event)=>{
        this.password=event.target.value
    }
    onClickSignIn=()=>{
        const {history}=this.props;
        if(this.password.length>0&&this.userName.length>0){
            this.props.authStore.userSignIn();
            history.replace('/products');
        }
        else if(this.userName.length==0){
            this.errorMessage="Please enter username"
        }
        else{
            this.errorMessage="Please enter password"
        }
    }
    render(){
        return(<SignIn>
                <Details>
                <strong>Sign in</strong>
                <Input  onChange={this.onChangeUsername} placeholder="Username"/>
                <Input  onChange={this.onChangePassword} placeholder="Password"/>
                <SignInButton onClick={this.onClickSignIn}>Sign in </SignInButton>
             
                <ErrorMessage>{(this.userName.length==0&&this.password.length==0)||this.password.length>0?this.errorMessage:null} </ErrorMessage>
                 <ErrorMessage>{this.userName.length>0&&this.password.length==0?this.errorMessage:null} </ErrorMessage>
                 </Details>
            </SignIn>
            )
    }
}
export default withRouter(SignInPage);
