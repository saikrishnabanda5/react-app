// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// class CounterParent extends React.Component {
//   @observable parentCounter = 0;

//   @action.bound
//   onParentCounterIncrement() {
//     this.parentCounter += 1;
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <CounterChild
//         onParentCounterIncrement={this.onParentCounterIncrement}
//         parentCounter={this.parentCounter}
//       />
//     );
//   }
// }

// @observer
// class CounterChild extends React.Component {
//   @observable childCounter1 = 0;
//   @observable childCounter2 = 0;

//   @action.bound
//   onIncrement() {
//     const { onParentCounterIncrement } = this.props;

//     onParentCounterIncrement();
//     onParentCounterIncrement();

//     this.childCounter1 += 3;
//   }

//   render() {
//     console.log("render CounterChild");
//     const { parentCounter } = this.props;

//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <div>parentCounter: {parentCounter}</div>
//         <div>childCounter1: {this.childCounter1}</div>
//         <div>childCounter2: {this.childCounter2}</div>
//       </div>
//     );
//   }
// }

// render(<CounterParent />, document.getElementById("root"));


// import React from 'react';
// import {Redirect } from "react-router-dom";
// import {observer} from 'mobx-react';
// import {observable,reaction} from 'mobx';
// import {ACCESS_TOKEN} from '../../utils/StorageUtils.js';
// @observer
// class LoginPage extends React.Component{
//     @observable redirectToPage
//     constructor(props){
//         super(props);
//         this.redirectToPage=false;
//     }
//     onSubmit=()=>{
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
//   }
//     render(){
//             if(this.redirectToPage){
//       return this.gotoGridScreenIfLoggedIn()
//     }
//         return(<div style={{margin:"40px"}}>
//             <input style={{border:"1px solid black"}} placeholder="Username"/>
//             <input style={{border:"1px solid black"}}placeholder="Password"/>
//             <button onClick={this.onSubmit}>Submit </button>
//             </div>);
//     }
// }


// export default LoginPage;