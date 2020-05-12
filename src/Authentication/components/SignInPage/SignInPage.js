import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {SignIn,Input,Details,ErrorMessage,SignInButton} from '../SignInPage/styledComponent.js';
import {getAccessToken} from '../../utils/StorageUtils.js';
@observer
class SignInPage extends React.Component{
    
    render(){
          const {
          apiStatus,
          username,
          password,
          errorMessage,
          onChangeUsername,
          onChangePassword,
          onClickSignIn,
          onEnterKeyPress} = this.props;
        return(
        <div className="flex justify-center items-center h-screen bg-gray-200">
        <form className="flex flex-col p-10 bg-white">
          <h2 className="font-bold mb-4">Sign in</h2>
          <input
            type="text"
            value={username}
            onChange={onChangeUsername}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Username"
          />  
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
            placeholder="Password"
            // onKeyPress={onEnterKeyPress}
          />
          <button
            text="Sign in"
            onClick={onClickSignIn}
            className="flex justify-center w-48 h-10 rounded bg-gray-900"
            // apiStatus={apiStatus}
            onKeyPress={onEnterKeyPress}
          > Sign</button>
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm">
              {errorMessage}
            </span>
          ) : null}
        </form>
      </div>
            );
    }
}

export default SignInPage;






//<Input type='text'     value={username} onChange={onChangeUsername} placeholder="Username"/>
                //<Input type='password' value={password}  onChange={onChangePassword} placeholder="Password"/>
//<ErrorMessage>{(username.length==0&&this.password.length==0)||this.password.length>0?this.errorMessage:null} </ErrorMessage>
                 //<ErrorMessage>{username.length>0&&this.password.length==0?this.errorMessage:null} </ErrorMessage>

// import React from 'react';
// import {observer,inject} from 'mobx-react';
// import {withRouter} from "react-router-dom";
// import {observable} from 'mobx';
// import {SignIn,Input,Details,ErrorMessage,SignInButton} from '../SignInPage/styledComponent.js';
// import {getAccessToken} from '../../utils/StorageUtils.js';
// import SignInRoute from '../../routes/SignInRoute/SignInRoute';
// @observer
// class SignInPage extends React.Component{
    
//     render(){
//           const {
//     //   apiStatus,
//       username,
//       password,
//       errorMessage,
//       onChangeUsername,
//       onChangePassword,
//     //   onEnterKeyPress,
//       onClickSignIn,
//     } = this.props;
//         return(<SignIn>
//                 <Details>
//                 <strong>Sign in</strong>
//                 <Input type='text' onChange={this.onChangeUsername} placeholder="Username"/>
//                 <Input type='password' onChange={this.onChangePassword} placeholder="Password"/>
//                 <SignInButton onClick={this.onClickSignIn}>Sign in </SignInButton>
//                 <ErrorMessage>{(this.userName.length==0&&this.password.length==0)||this.password.length>0?this.errorMessage:null} </ErrorMessage>
//                  <ErrorMessage>{this.userName.length>0&&this.password.length==0?this.errorMessage:null} </ErrorMessage>
//                  </Details>
//             </SignIn>
//             );
//     }
// }

// export default withRouter(SignInPage);
