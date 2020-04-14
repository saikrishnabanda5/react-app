import React from 'react'
import {observer} from 'mobx-react'
import todoStore from '../../../stores/TodoStore';

@observer
class Todo extends React.Component{
  onRemoveTodo=(event)=>{
        const {removetodo} = todoStore; 
         removetodo(event);  
  }
  render(){
    const {stateVariable}=this.props
    
    const {id,title,isChecked,onUpdateTodoTitle,onCompleteTodo} =stateVariable;
      return( 
  <div className="todo-list" >
    <input type="checkbox" className="checkbox" checked={isChecked} onChange={onCompleteTodo}  />
    <input type="text" className ="given-input" defaultValue={title} disabled={isChecked} onChange={onUpdateTodoTitle} />
    <span onClick={this.onRemoveTodo}  className="delete-button" id={id} > X</span>
  </div>
  )
  }
  
}

export {Todo};
