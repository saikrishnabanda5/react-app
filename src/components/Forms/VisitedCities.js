import React from 'react'
import {Link} from "react-router-dom";
class VisitedCities extends React.Component{
    state={
        visitedCities:[],
        selectedCities:[],
        cityOptions:[" Hyderabad", " Chennai", " Bangalore", " Pune", " Mumbai", " Delhi"],
    }
    handleUserInput=(event)=>{ 
        console.log(event.target.value)
        if(event.target.checked){
            const values =event.target.value
            this.setState({
            selectedCities: [...this.state.selectedCities,event.target.value]    
            })
        }
        else{
            const remove = this.state.selectedCities.filter((item,index)=>{
            //    return item!=event.target.value
            console.log("re",item)
            })
            console.log("re",remove)
         this.setState({
            selectedCities: remove,
            }) 
        }
    } 
    handleSubmit = (event)=>{
        this.setState({
            visitedCities:`I have visited these cities ${this.state.selectedCities}.`
        })
    }
    displayVisitedCitiesMessage=()=>{
        
        return <span> {this.state.visitedCities}</span>
    }
    selectCities=()=>{
        const cities = this.state.cityOptions.map((eachcity)=>{
            return <label> <input type="checkbox" value={eachcity} onChange={this.handleUserInput} />{eachcity}  </label>
        })
        return cities;
    }
    render (){
        console.log(this.state.selectedCities)
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"auto"}}>
                <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/form-components" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                <h3 style={{marginTop:"25px"}}>VisitedCities </h3>
            </div>
            <div style={{margin:"20px"}}>Which of the following cities you have Visited? </div>
            <div style={{display:"flex",flexDirection:"column"}}>{this.selectCities()} </div>
            <button style={{padding:"10px",border:"2px solid black",width:"200px",fontSize:"17px",margin:"20px"}}  onClick={this.handleSubmit} > Make Your Choice</button>
             {this.state.visitedCities!=""  && <div>{this.displayVisitedCitiesMessage()} </div>}
            </div>
            )
    }
}












export {VisitedCities}




// * When the user clicks on 'Visited Cities' link, the page should be navigated to `/form-components/visited-cities`
// * Create a component named `CheckboxWithLabel` which has the following methods, props, and state variables inside `src/common/components`
//     * Props
//         - label
//         - handleCheckboxClick - callback function with label and isChecked as arguments

// * Create a component named `VisitedCities` which has the following methods, props, and state variables inside `src/components`
//     * Methods
//         - handleCheckboxClick
//         - handleSubmit
//         - displayVisitedCitiesMessage
//         - renderCityOptions
//     * State variables
//         - visitedCities
//         - selectedCities
//         - cityOptions
//     * Props
//         - cityList
// * Refer preview-3
// * Display the list of selected cities below the submit button on submit
// * List of selected cities should be displayed as comma-separated shown in the preview-3
// * Accept the `cityList` as a prop to VisitedCities component
//     - ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]
// * On click back icon user should be navigated to "form components"
