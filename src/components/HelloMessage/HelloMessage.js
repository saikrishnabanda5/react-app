import React,{Component} from 'react';
class HelloMessage extends Component{
    render(){
        console.log("p-p",this.props.message)
        return  <span>Hello world {this.props.message}</span>
    }
}
export {HelloMessage}