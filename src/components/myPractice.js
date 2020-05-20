import React, { Component } from "react";
import { render } from "react-dom";

// class MockCounter extends Component {
//   state = {
//     count: 2,
//     doubleTheCount: 3,
//     tripleTheCount: 4,
//   };

//   updateCounts =  () => {
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     // await promise;
//     this.updateCountsAfterPromiseSettled();
//   };

//   updateCountsAfterPromiseSettled = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//     this.setState({
//       doubleTheCount: this.state.doubleTheCount + 1,
//     });
//     this.setState({
//       tripleTheCount: this.state.tripleTheCount + 1,
//     });
//   };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <p>Double Count: {this.doubleTheCount}</p>
//         <p>Triple Count: {this.tripleTheCount}</p>
//         <button onClick={this.updateCounts}>Update counts</button>
//       </div>
//     );     
//   }
// }
// export default  MockCounter;

// ----------------------------------------------------------------------------------

// import React from 'react'
// class MockCounter extends React.Component {
//   state = {
//     parentCounter: 0
//   };
// onParentCounterIncrement =   () => {
//   const {parentCounter} =this.state;
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     // await promise;
//     this.setState({
//       parentCounter: parentCounter + 1 
//     });
//     this.setState({
//       parentCounter: parentCounter + 1 
//     });
//     this.setState({
//       parentCounter: parentCounter + 1 
//     });

//   };
    

//   render() {
//     console.log("CounterParent Render");

//     const { parentCounter } = this.state;

//     return (
//       <CounterChild
//         onParentCounterIncrement={this.onParentCounterIncrement}
//         parentCounter={parentCounter}
//       />
//     );
//   }
// }
// --------------------------------------------------------------------------------------
// class MockCounter extends React.Component {
//   state = {
//     childCounter1: 0,
//     childCounter2: 0
//   };

//   onIncrement = () => {
//     const { onParentCounterIncrement } = this.props;
//     const { childCounter2 } = this.state;

//     onParentCounterIncrement();
//     // onParentCounterIncrement();

//     this.setState({ childCounter2: childCounter2 + 1 });
//     this.setState({ childCounter2: childCounter2 + 1 });
//   };

//   render() {
//     console.log("CounterChild Render");

//     const { parentCounter } = this.props;
//     const { childCounter1, childCounter2 } = this.state;

//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <div>parentCounter: {parentCounter}</div>
//         <div>childCounter1: {childCounter1}</div>
//         <div>childCounter2: {childCounter2}</div>
//       </div>
//     );
//   }
// }

// export default  MockCounter;



// --------------------------------------------------------------------------------------


// class MockCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 51 };
//   }
//   onIncrement = () => {
//     this.state.count=this.state.count+2
//     this.state.count=this.state.count+2
//     this.state.count=this.state.count+2
//     this.state.count=this.state.count+2
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={this.onIncrement}>Increment</button>
//       </div>
//     );
//   }
// }

// export default  MockCounter;
// --------------------------------------------------------------------------------------

import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class MockCounter extends Component {
   @observable count = 0;

  onDecrement = () => {
    this.count = this.count + 1;
    this.count = this.count - 1;
    this.count = this.count - 1; 
    
  };
  render() {
    return (
      <div>
        <p>Count: {this.count}</p>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}
export default MockCounter;
// --------------------------------------------------------------------------------------
// class MockCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 10 };
//   }
//   onIncrement = () => {
//     const { count } = this.state;
    
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));

//     this.setState({ count: count + 1 });
//     this.setState({ count: count + 1 });
//     this.setState({ count: count + 1 });
   
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={this.onIncrement}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MockCounter