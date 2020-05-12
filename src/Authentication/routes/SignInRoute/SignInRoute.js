import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import SignInPage from '../../components/SignInPage';
@inject('authStore')
@observer
class SignInRoute extends React.Component {
    @observable username
    @observable password  
    @observable errorMessage
    constructor(props){
        super(props);
        this.username="";
        this.password="";
        this.errorMessage="";
    }
    onChangeUsername=(event)=>{
        this.username=event.target.value;
    }    
    onChangePassword=(event)=>{
        this.password=event.target.value;
    }
    onEnterKeyPress=(event)=>{
        if(event.key==="Enter"){
            this.onClickSignIn();
        }
    }
    onClickSignIn=()=>{
        const {history}=this.props;
        if(this.password.length>0&&this.username.length>0){
            this.props.authStore.userSignIn();         
            history.replace('/products');
        }
        else if(this.username.length==0){
            this.errorMessage="Please enter username";
        }
        else{
            this.errorMessage="Please enter password";
        }
    }
  render() {
      const {getUserSignInAPIStatus}=this.props;
    return (
      <SignInPage
      apiStatus={getUserSignInAPIStatus}
      username={this.username}
      password={this.password}
      errorMessage={this.errorMessage}
      onChangeUsername={this.onChangeUsername}
      onChangePassword={this.onChangePassword}
      onClickSignIn={this.onClickSignIn}
      onEnterKeyPress={this.onEnterKeyPress}
      />
    );
  }
}

export default withRouter(SignInRoute);