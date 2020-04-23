import React from 'react'
import {observer,inject} from 'mobx-react'
@inject('todoStore')
@observer
class Todo extends React.Component{
  onRemoveTodo=(event)=>{
        const {removetodo} = this.props.todoStore; 
         removetodo(event);  
  }
  render(){
      const {id,title,isChecked,onUpdateTodoTitle,onCompleteTodo}=this.props.stateVariable;
      return( 
  <div className="todo-list" >
    <input type="checkbox" className="checkbox" checked={isChecked} onChange={onCompleteTodo}  />
    <input type="text" className ="given-input" defaultValue={title} disabled={isChecked} onChange={onUpdateTodoTitle} />
    <span onClick={this.onRemoveTodo}  className="delete-button" id={id} > X</span>
  </div>
  );
  }
  
}

export {Todo};
