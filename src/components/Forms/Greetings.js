import React from 'react';
import {Link} from "react-router-dom";
class Greeting extends React.Component{
    state = {
     userInputText:"",
     displayName : false,
     name:""
    }
    handleSubmit=(event)=>{
        this.state.name=this.state.userInputText;
            this.setState({
                userInputText:'',
                displayName : true
            })
    }
    handleUserInput=(event)=>{
        this.setState({
            userInputText:event.target.value,
        })
    }
    displayMessage =()=>{
        return <div>{`Hello ${this.state.name}, have a nice day!`}
        </div>
    }
    render(){
         const {userInputText,displayName} =this.state
         
        return(
    
           <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            
            <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/form-components" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                <h3 style={{marginTop:"25px"}} >Greetings </h3>
            </div>
            
            <input style={{border:"2px solid black",padding:"10px",fontSize:"17px",margin:"10px"}} onChange={this.handleUserInput} type="text" placeholder="Enter Name" value ={userInputText}/>
            <button style={{padding:"10px",border:"2px solid black",fontSize:"17px"}}onClick={this.handleSubmit} > Greet </button>
            { displayName==true && <span style={{fontSize:"20px"}}> {this.displayMessage()}</span> }
            
            </div>
            )
    }
}

export  {Greeting}
