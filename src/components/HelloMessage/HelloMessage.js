import React,{Component} from 'react';
class HelloMessage extends Component{
    render(){
        return  <span>Hello world {this.props.message}</span>
    }
}
export {HelloMessage}