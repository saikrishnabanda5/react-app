import React from 'react'
import {observer,inject} from 'mobx-react'
@inject('todoStore')
@observer
class TodoFooter extends React.Component{
    onAll=(event)=>{
        const {onAll} = this.props.todoStore
        onAll();
    }
    onActive=()=>{
        const {onActive} =this.props.todoStore
        onActive();
    }
    onCompleted=()=>{
        const {onCompleted} = this.props.todoStore
        onCompleted();
        console.log(this.props.todoStore.list)
    }
    onClearCompleted=()=>{
        const {onClearCompleted} = this.props.todoStore
        onClearCompleted();
    }
    
    render(){
        return(
            // {this.props.todoStore.list.length!==0?
        <div className="footer-section">
        <span> itemsLeft:{this.props.todoStore.itemsLeftCount.itemsLeftCount}</span>
            <button className="all"       onClick={this.onAll}> All </button>
            <button className="active"    onClick={this.onActive}> Active </button>
            <button className="completed" onClick={this.onCompleted}>Completed </button>
            <button className="completed" onClick={this.onClearCompleted}>Clear Completed </button>
        </div>
        // :""}
        );
    }
}
export default TodoFooter;