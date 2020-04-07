import React from 'react'
import {Link} from "react-router-dom";
class YourState extends React.Component {
    state = {
      selectedState:"",
      submittedState:false,
      selectItem:"",
      states:[ "Select your state","Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
    };

  handleChange=(event)=> {
    this.setState({
      selectedState: event.target.value
    });
  }

  handleSubmit=(event)=> {
    this.state.selectItem = this.state.selectedState
    this.setState({
      submittedState:true
    })
    event.preventDefault();
  }
  selectFromStates= ()=>{
    const stateselect = this.state.states.map((eachstate)=>{
      return <option value = {eachstate}> {eachstate}</option>
    })
    return stateselect;
  }
  displayMessage=()=>{
    return <div>{`I am from "${this.state.selectItem}" state`} </div>
  }

  render() {
    return (<div>
          <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%",marginBottom:"10px"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/form-components" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                <h3 style={{marginTop:"25px"}}>YourState </h3>
            </div>
      <form  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}onSubmit={this.handleSubmit}>
          <select style={{fontSize:"14px"}}value={this.state.selectedState} onChange={this.handleChange}>
            {this.selectFromStates()}
          </select>
        <button style={{padding:"10px",border:"2px solid black",width:"150px",fontSize:"17px",margin:"20px"}} type="submit" value="Submit" > Submit </button>
        {this.state.submittedState==true && <span>{this.displayMessage()} </span>}
      </form>
      </div>
    );
  }
}

export {YourState}
// * When the user clicks on 'Your State' link, the page should be navigated to '/form-components/your-state`
// * Create a component named `YourState` which has the following methods, props, and state variables
//     * Methods
//         - handleChangeState
//         - handleSubmit
//         - displayMessage
//     * State variables
//         - selectedState
//         - submittedState
//     * Props
//         - stateList
// * Refer preview-4
// * Display the selected state below the submit button on submit
// * Accept the `stateList` as a prop to this component
//     - ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
// * On click back icon user should be navigated to "form components"


