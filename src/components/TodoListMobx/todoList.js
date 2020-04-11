/* global React ReactDOM*/
import React from 'react';
import {observer} from 'mobx-react';
import todoStore from '../../stores/TodoStore'
import {Link} from "react-router-dom";
let id,value,Index;
@observer
class Todo1 extends React.Component{
    
  onCheckboxChange=(event)=>{ 
      console.log(this.props)
          let Index = event.target.id-1;
          if(event.target.checked){
              event.target.nextElementSibling.style.textDecoration='line-through';
         this.props.list[Index].checked = true;
          }
          else{
              event.target.nextElementSibling.style.textDecoration='none';
        this.props.state.list[Index].checked = false;
          }                                 
    
  }
  render(){
      const {removetodo,checked,todoId,value}=this.props;
      return(
    <div className="todo-list" id={todoId}>
          {checked==true &&<input type="checkbox" className="checkbox" checked={true} onChange={this.onCheckboxChange} id={todoId} />}
         {checked==false &&<input type="checkbox" className="checkbox" onChange={this.onCheckboxChange} id={todoId} />}
          <input type="text" className ="given-input" defaultValue={value} id={todoId} />
          <span onClick={removetodo} id={todoId} className="deolete-button"> X</span>
    </div>
  );
  }
  
}


@observer
class TodoList1 extends React.Component{
    state={
            list:[],
            listAll:[]
    }
    onKeyDownValue=(event)=>{
        todoStore.onKeyDownValue(event);
    }
     removetodo=(event)=>{
         todoStore.removetodo(event);
    // const Index= this.state.list.findIndex(item=>
    //           item["id"] === Number(event.target.id)
    //       );
    //       let remainingtodos = this.state.list.filter((item,index)=>
    //           index!=Index 
    //           );
    //     this.setState({
    //           list:remainingtodos,
    //           listAll:remainingtodos
    //     });
    }
    renderListValues=()=>{
        return todoStore.renderListValues();
    }
    onAll=(event)=>{
       this.setState({
            list:this.state.listAll,
        });
    }
    onActive=()=>{
       let onActiveLists= this.state.listAll.filter((item)=>{
          return item.checked==false;
        });
        this.setState({
            list:onActiveLists,
        });
    }
    onCompleted=()=>{
        let onCompletedLists= this.state.listAll.filter((item)=>{
          return item.checked==true;
        });
        this.setState({
            list:onCompletedLists,
        });
    }
    onClearCompleted=()=>{
        let onCompletedLists= this.state.listAll.filter((item)=>{
           if(item.checked==false){
          return item;
           }
        });
        this.setState({
            list:onCompletedLists,
            listAll:onCompletedLists,
        });
    }
    footerSection=(event)=>{
        if(this.state.list.length!=0)
        {
        return (<div className="footer-section">
        <span> itemsLeft:{this.state.list.length}</span>
    <button className="all" onClick={this.onAll}> All </button>
    <button className="active" onClick={this.onActive}> Active </button>
    <button className="completed" onClick={this.onCompleted}>Completed </button>
    <button className="completed" onClick={this.onClearCompleted}>Clear Completed </button>
        </div>);
    }
}
    render(){
        return (
        <div>
            <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
                         <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
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

export {TodoList1,Todo1};































