import React from 'react';
import {observer} from 'mobx-react';
import countStore from '../../stores/CounterAppStore'
import {TagH1,Increment,Input,Decrement,Bottom,CountApp} from './styledComponent.js';
@observer
class CounterApp extends React.Component{
    onIncrement=()=>{
        const {onIncrement} = countStore;
        countStore.onIncrement();
    }
    onDecrement=()=>{
        const {onDecrement} = countStore;
        countStore.onDecrement();
    }
    inputValue=(event)=>{
        const {displayInput} = countStore;
        displayInput(event.target.value);
    }
    render(){
        return(
        <CountApp>
          <TagH1>Counter </TagH1>
           <Bottom>
                  <Increment onClick={this.onIncrement}>+</Increment>
                  <Input type="number" onChange={this.inputValue} value={countStore.number}/> 
                  <Decrement onClick={this.onDecrement}>-</Decrement>
          </Bottom>
        </CountApp>)
    }
}

export default CounterApp ;

