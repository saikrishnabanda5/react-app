/* global React ReactDOM*/
import React from 'react';
import {Link} from "react-router-dom";
let id,value,Index
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            listAll:[]
        }; 
    }
    onKeyDownValue=(event)=>{
        if(event.keyCode===13){
            id= this.state.list.length+1
            if(event.target.value!==""){
                console.log("value",event.target.value)
        this.setState({
            list:[...this.state.list,{value:event.target.value,id:id,checked:false}],
            listAll:[...this.state.list,{value:event.target.value,id:id,checked:false}]
            });
            console.log("first-list",this.state.list)
        event.target.value ="";
        }
        }
    }
     removetodo=(event)=>{
    const  Index= this.state.list.findIndex(item=>
              item["id"] === Number(event.target.id)
          );
          let remainingtodos = this.state.list.filter((item,index)=>
              index!=Index 
              )
        this.setState({
              list:remainingtodos,
              listAll:remainingtodos
        });
        console.log("removed-list",this.state.list);
    }
    renderListValues=()=>{
        let valueObtained = this.state.list.map((state,state1,index)=> {
            console.log("statee",state)
              return <Todo key ={state["id"]} value={state.value} todoId= {state["id"]} checked={state["checked"]} removetodo={this.removetodo} state={this.state} />;
        });
        return valueObtained;
    }
    onAll=(event)=>{
       this.setState({
            list:this.state.listAll,
        })
    }
    onActive=()=>{
        console.log(this.state.list)
       let onActiveLists= this.state.listAll.filter((item)=>{
          return item.checked==false
        })
        this.setState({
            list:onActiveLists,
        })
    }
    onCompleted=()=>{
        let onCompletedLists= this.state.listAll.filter((item)=>{
          return item.checked==true;
        })
        this.setState({
            list:onCompletedLists,
        })
    }
    onClearCompleted=()=>{
        let onCompletedLists= this.state.listAll.filter((item)=>{
           if(item.checked==false){
          return item;
           }
        })
        this.setState({
            list:onCompletedLists,
            listAll:onCompletedLists,
        })
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
        </div>)
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
export {TodoList};

























