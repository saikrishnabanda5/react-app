import React from 'react';
import {Link} from "react-router-dom";
class FavouriteDessert extends React.Component{
    state = {
         item:"",
         selectedDessert:false,
         favoriteDessert:"", 
    }
    handleUserInput=(event)=>{
        this.setState({
            favoriteDessert:event.target.value
        });
    }
    handleSubmit=(event)=>{
        this.state.item=this.state.favoriteDessert;
          this.setState({
              item:this.state.item,
              selectedDessert:true,
          });
    }
    displayMessage=()=>{
        return <div>{`My favoriteDessert is ${this.state.item.toUpperCase()}`} </div>;
    }
    render(){
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"auto",margin:"10px"}}>
            <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%",marginBottom:"10px"}}>
            <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/form-components" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
            <h3 style={{marginTop:"25px"}} >FavouriteDessert </h3>
            </div>
            <label><div>What is your favourite dessert?</div>
            </label>
            <div style={{display:"flex",flexDirection:"column"}}>
            <label><input type="radio" value="Vanilla" name="Dessert" 
            onChange={this.handleUserInput}/>Vanilla</label>
            
            <label><input type="radio" value="Butterscotch" name="Dessert" 
            onChange={this.handleUserInput}/>Butterscotch</label>
            
            <label><input type="radio" value="Gulab Jamum" name="Dessert" 
            onChange={this.handleUserInput}/>Gulab Jamum</label>
            
            <label><input type="radio" value="Yoghurt Pots" name="Dessert"
            onChange={this.handleUserInput}/>Yoghurt Pots</label>
            
            <label><input type="radio" value="Baked Banana" name="Dessert"
            onChange={this.handleUserInput}/>Baked Banana</label>
            
            <label><input type="radio" value="Chocolate" name="Dessert" 
            onChange={this.handleUserInput}/>Chocolate</label>
            </div>
            <button style={{padding:"10px",border:"2px solid black",width:"200px",fontSize:"17px"}} onClick={this.handleSubmit}> Make your choice</button>
            {this.state.selectedDessert==true && 
            <span> {this.displayMessage()}</span>}
            </div>
            );
    }
}


export {FavouriteDessert};
// * When the user clicks on 'Favourite Dessert' link, the page should be navigated to `/form-components/favorite-dessert`.
// * Create a component named `FavouriteDessert` which has the following methods, props, and state variables
//     * Methods
//         - handleUserInput
//         - handleSubmit
//         - displayMessage
//         - renderDessertOptions
//     * State variables
//         - selectedDessert
//         - favoriteDessert
//     * Props
//         - dessertList
// * Refer preview-2
// * Display the selected dessert below the submit button on submit
// * Name of the selected dessert should be displayed in capital letters.
// * Accept the `dessertList` as a prop to this component
//     - ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
// * On click back icon user should be navigated to "form components"


//  <label> <input type="radio" name="drone" value="huey" /></label>
//               <label> <input type="radio" name="1"  />Vanilla </label>
//               <label> <input type="radio" name ="2"  />Butterscotch </label>
//               <label> <input type="radio" checked={false} />Gulab Jamum </label>
//               <label> <input type="radio" checked={false} />Yoghurt Pots </label>
//               <label> <input type="radio" checked={false} />Baked Banana </label>
//               <label> <input type="radio" checked={false} />Baked Banana</label>