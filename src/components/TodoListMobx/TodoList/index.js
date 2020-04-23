/* global React ReactDOM*/
/*global fetch */
import React from 'react'; 
import {observer,inject} from 'mobx-react';
import {Todo} from '../Todo';
// import TodoFooter from '../TodoFooter';
import {Link} from "react-router-dom"; 
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView';

let id,value,Index;
@inject('todoStore')
@observer  
class TodoList1 extends React.Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    getTodoStore=()=>{
        return this.props.todoStore;
    }
    
    doNetworkCalls=()=>{
        this.props.todoStore.getTodo();
    }
    
    onKeyDownValue=(event)=>{
        if(event.keyCode===13){
            if(event.target.value!==""){
                this.getTodoStore().onKeyDownValue(event);
                event.target.value ="";
            }
        }
    }
    getFilteredList=()=>{
        if(this.getTodoStore().selectedFilter=="All"){
            return this.getTodoStore().list;
        }
        else if(this.getTodoStore().selectedFilter=="Active"){
          const activeList = this.getTodoStore().list.filter((eachTodo)=>{
              return eachTodo.isChecked===false;
          });
          return activeList;
        }
        else if(this.getTodoStore().selectedFilter=="Completed"){
         const completedList = this.getTodoStore().list.filter((eachTodo)=>{
              return eachTodo.isChecked===true;
          });
          return completedList;
        }
    }
    
   renderListValues=observer(()=>{
        const filteredList=this.getFilteredList();
        if(filteredList.length===0){
            return <NoDataView/>;
        }
        let valueObtained = filteredList.map((state,index)=> {
              return <Todo key={Math.random()} stateVariable={state} />;
        });
        return valueObtained;
    })
    onAll=(filter)=>{
        const {onAll} = this.getTodoStore();
        onAll();
    }
    onActive=()=>{
        const {onActive} =this.getTodoStore();
        onActive();
    }
    onCompleted=()=>{
        const {onCompleted} = this.getTodoStore();
        onCompleted();
    }
    onClearCompleted=()=>{
        const {onClearCompleted} = this.getTodoStore();
        onClearCompleted();
    }
    footerSection=(filter)=>{
        if(this.getTodoStore().list.length!==0)
        {
            return <div className="footer-section">
            <span> itemsLeft:{this.getTodoStore().itemsLeftCount}</span>
                <button className="all"       onClick={this.onAll}> All </button>
                <button className="active"    onClick={this.onActive}> Active </button>
                <button className="completed" onClick={this.onCompleted}>Completed </button>
                <button className="completed" onClick={this.onClearCompleted}>Clear Completed </button>
            </div>;
        }
    }
    render(){
        const {getTodoListAPIStatus,getTodoListAPIError}=this.getTodoStore();
        return (
        <div>
            <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
                    <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/" >
                   <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> 
                    </Link>
                    <h3 style={{marginTop:"25px"}} >Todo List </h3>
            </div>
            
            <div style={{margin:"20px"}}>
                <input onKeyDown={this.onKeyDownValue} placeholder="Write something" className="user-inputs" /> 
                <LoadingWrapperWithFailure
                    apiStatus={getTodoListAPIStatus}
                    apiError={getTodoListAPIError}
                    onRetryClick={this.doNetworkCalls}
                    renderSuccessUI={this.renderListValues}
                />
                <div>{this.footerSection()}</div>
            </div>
        </div>
        );
    }
}
export {TodoList1};


// <div style={{margin:"20px"}}>
                
//                 <div>  {this.renderListValues()}</div>
                
//             </div>


// <TodoFooter 
//                     key={this.getTodoStore().list}
//                     todoStore={this.props.todoStore}
//                 />