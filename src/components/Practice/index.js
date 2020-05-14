import React from 'react'
import {ThemeContext} from './themeContext';

//const color=React.createContext('pink');

// class ToggleColor extends React.Component {
  
//   static reqColor = color;
//   render() {
//     alert('came');
//     return <button theme={this.context} ></button>;
//   }
// }


class CounterParent extends React.Component {
  render() {
    return (
    <ThemeContext.Consumer>
      {({theme,toggleTheme})=>(
          <button style={{backgroundColor:theme,margin:"30px",padding:"15px",color:"white"}}
          onClick={toggleTheme}>
          Toggle themee
          </button>
      )}
    </ThemeContext.Consumer>
    );     
  }
}

class Apps extends React.Component {
  
  constructor(props) {
    super(props);
          this.state={
            height:"400px",
            width:"700px",
            theme:"dark",
            toggleTheme:this.toggleTheme,
          };
    };
     toggleTheme=()=>{
            this.setState(state=>({
              theme:state.theme==="red"?"blue":"red"
            }));
          };
          
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <CounterParent />
    </div>
  );
}
export default Apps;

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

// export default CounterParent;



// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class CounterParent extends Component {
//   @observable count = 44;
//   @observable isCountChanged = false;

//   @action.bound
//   onChangeCount() {
//     setTimeout(() => {
//       this.isCountChanged = true;
//       this.count = this.count / 4;
//     },);
//   }

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.count}</p>
//         <button onClick={this.onChangeCount}>Change count</button>
//         <p>{this.isCountChanged ? "Count Changed" : ""}</p>
//       </div>
//     );
//   }
// }

// export default CounterParent

//-----------------------------------------

// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";
// @observer
// class CounterParent extends React.Component {
//   @observable parentCounter = 0;

//   @action.bound
//   onParentCounterIncrement() {
//     //   alert(1)
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

// export default CounterParent

//--------------------------------

// import React, { Component } from "react";
// import { render } from "react-dom";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class CounterParent extends Component {
//   @observable count = 2;
//   @observable doubleTheCount = 3;
//   @observable tripleTheCount = 4;

//   @action.bound
//   async updateCounts() {
//     let promise = new Promise((resolve, reject) => {
//       resolve("Success");
//     });
//     await promise;
//     this.count = this.count + 1;
//     this.doubleTheCount = this.doubleTheCount * 2;
//     this.tripleTheCount = this.tripleTheCount * 3;
//   }

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

// export default CounterParent

// import React from "react";
// import { render } from "react-dom";
// import { observer } from "mobx-react";
// import { observable, action } from "mobx";

// @observer
// class CounterParent extends React.Component {
//   @observable parentCounter = 12;

//   @action.bound
//   onParentCounterUpdate() {
//     this.parentCounter += 2;
//   }

//   render() {
//     console.log("render CounterParent");
//     return (
//       <CounterChild
//         onParentCounterUpdate={this.onParentCounterUpdate}
//         parentCounter={this.parentCounter}
//       />
//     );
//   }
// }

// @observer
// class CounterChild extends React.Component {
//   @observable childCounter1 = 301;
//   @observable childCounter2 = 14;

//   @action.bound
//   onUpdate() {
//     const { onParentCounterUpdate } = this.props;
//     onParentCounterUpdate();
//     this.childCounter1 += 2;
//     this.childCounter2 -= 2;
//   }

//   render() {
//     console.log("render CounterChild");
//     const { parentCounter } = this.props; 

//     return (
//       <div>
//         <button onClick={this.onUpdate}>Update count</button>
//         <div>parentCounter: {parentCounter}</div>
//         <div>childCounter1: {this.childCounter1}</div>
//         <div>childCounter2: {this.childCounter2}</div>
//       </div>
//     );
//   }
// }

// export default CounterParent;
