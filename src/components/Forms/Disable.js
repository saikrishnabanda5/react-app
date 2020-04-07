import React from "react"
import {Link} from "react-router-dom";
let count=0
class DisableOrEnable extends React.Component{
    state={
        isDisableButtonChecked:false,
        showMessage:''
    }
    handleChange=(event)=>{
        if(event.target.checked){
        this.setState({
           isDisableButtonChecked:true,
           showMessage:"I am Disabled"
        })
        }
        else{
        this.setState({
           isDisableButtonChecked:false,
           showMessage:""
        })    
        }
    }
    handleSubmit =(event)=>{
        this.setState({
           showMessage:"I am Enabled",
           }) 
    }
    displayMessage =(event)=>{
            return <span> {this.state.showMessage}</span>
    }
    render(){
        return(<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/form-components" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                <h3 style={{marginTop:"25px"}} >DisableOrEnable </h3>
            </div>
        <div>
        <input type ="checkbox" onChange={this.handleChange} /> Disabled 
        <button style={{border:"2px solid black",fontSize:"16px",padding:"10px",margin:"10px"}}onClick ={this.handleSubmit} disabled={this.state.isDisableButtonChecked} > Click me</button>
        </div>
        
        <span>{ this.displayMessage()} </span>
        </div>
            )
    }
}



export {DisableOrEnable}







// Problem Statement 5:

// * When the user clicks on 'Disable or Enable' link, the page should be navigated to `/form-components/disabled-enabled`
// Create a component named `DisableOrEnable` which has the following methods, props, and state variables
//     * Methods
//         - handleChange
//         - handleSubmit
//         - displayMessage
//     * State variables
//         - isDisableButtonChecked
//         - showMessage
// * Refer preview-5
// * Display the enable or disable state message below the click me button
// * On click back icon user should be navigated to "form components"