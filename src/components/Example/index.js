import React from 'react'
import {Provider,inject} from 'mobx-react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@inject("temp","name")
class C extends React.Component{
  render(){
    const {temp,name} = this.props
    console.log("C temp", temp,name)
    return <div> {temp}  </div>
  }
}
//first inject and then observer
@inject("temp")  
@observer
class B extends React.Component{
  @observable name
  
  onChange=(event)=>{
    this.name=event.target.value
  }
  render(){
    const {temp} = this.props
    console.log("B temp", temp)
    return (
      <div>
        <input value={this.name} onChange={this.onChange}/>
        <C name={this.name}/>
      </div>
)
  }
}

class Example extends React.Component{
  render(){
    return (<Provider temp={'values'} >
              <input value={this.name} />
              <B temp={"sai krishna"}/>
           </Provider>)
  }
}
export default Example


//test cases
//we can overwrtie anything using inject -call to server
//but in test cases it ill not call to server 