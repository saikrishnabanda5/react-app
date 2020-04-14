/* global React ReactDOM*/
import React from 'react'; 
import {observer} from 'mobx-react';
import {Todo} from '../Todo';
import {Link} from "react-router-dom"; 
import todoStore from '../../../stores/TodoStore';
let id,value,Index;
@observer 
class TodoList1 extends React.Component{
    onKeyDownValue=(event)=>{
        if(event.keyCode===13){
            if(event.target.value!==""){
                todoStore.onKeyDownValue(event);
                event.target.value ="";
            }
        }
    }
    getFilteredList=()=>{
        if(todoStore.selectedFilter=="All"){
            return todoStore.list
        }
        else if(todoStore.selectedFilter=="Active"){
          const activeList = todoStore.list.filter((eachTodo)=>{
              return eachTodo.isChecked===false;
          });
          return activeList
        }
        else if(todoStore.selectedFilter=="Completed"){
         const completedList = todoStore.list.filter((eachTodo)=>{
              return eachTodo.isChecked===true;
          });
          return completedList
        }
    }
    
    renderListValues=()=>{
        const filteredList=this.getFilteredList()
        let valueObtained = filteredList.map((state,index)=> {
            console.log("state",state)
              return <Todo key={state.id} stateVariable={state} />;
        });
        console.log("valueObtained",valueObtained)
        return valueObtained;
    }
    onAll=(event)=>{
        const {onAll} = todoStore;  
        onAll();
    }
    onActive=()=>{
        const {onActive} = todoStore;
        onActive();
    }
    onCompleted=()=>{
        const {onCompleted} = todoStore;
        onCompleted();
    }
    onClearCompleted=()=>{
        const {onClearCompleted} = todoStore;
        onClearCompleted();
    }
    footerSection=()=>{
        if(todoStore.list.length!=0)
        {
        return (<div className="footer-section">
        <span> itemsLeft:{todoStore.itemsLeftCount}</span>
            <button className="all"       onClick={this.onAll}> All </button>
            <button className="active"    onClick={this.onActive}> Active </button>
            <button className="completed" onClick={this.onCompleted}>Completed </button>
            <button className="completed" onClick={this.onClearCompleted}>Clear Completed </button>
        </div>)
    }
}
    render(){
        console.log("propsss",this.props)
        return (
        <div>
        <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
                <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/" >
              {/*  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>  */}
                </Link>
                <h3 style={{marginTop:"25px"}} >Todo List </h3>
        </div>
        <div style={{margin:"20px"}}>
            <input onKeyDown={this.onKeyDownValue} placeholder="Write something" className="user-inputs" /> 
            <div>  {this.renderListValues()}</div>
            <div> {this.footerSection()}</div>
        </div>
        </div>
        );
    }
    
}
export {TodoList1};