import React from 'react';
import {Link} from "react-router-dom";
/*global React ReactDOM*/
let carId=1;
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            carStatus:"Stopped",
            speed:0  
        };
        
    }                                
    accelerate=()=>{
    
        if(this.state.carStatus==="Running")
        {
        this.setState({
          speed: this.state.speed+10
         });
        }
    }
    applyBrake=()=>{
        if(this.state.speed>0){
           this.setState({
          speed: this.state.speed-10
         });

        }
    }
    
    startStop = (props)=>{
        if(this.state.carStatus==="Stopped"){
        this.setState({
            carStatus:"Running",
            speed:0
        });
        }
        else{
          this.setState({
            carStatus:"Stopped",
            speed:0
        })  ;
        }
    }

    render(){
        return(<div className="main-car"> 
            <span>Car:{this.props.carId} </span>
            <button className="start-stop" onClick={this.startStop} >
            {this.state.carStatus=="Running" ? "Stop": "Start" }
            </button>
            <button onClick= {this.props.removeCarFromCarsList} id={this.props.carId}> X </button>
            <div> {"Status:"}{this.state.carStatus==="Running"?  this.state.speed>0 ? `Running with speed ${this.state.speed} KMPH`:"Running" :"Stopped" }</div>
        <button onClick={this.accelerate}> Accelerate </button>
         <button onClick={this.applyBrake}> Apply Brake </button>
      </div>
       );
    }
    
}

 class CarsList extends React.Component{
     constructor(){
      super();   
      this.state={
            carList:[carId]
        };
     }
      addCarToCarsList=()=>{
        //   console.log(this.state.carList.length)
          carId = this.state.carList[this.state.carList.length-1];
          carId = isNaN(carId)? 0:carId;
          this.setState((state)=>{
            return {
            carList:[...state.carList,++carId]    
            }
          });
      }
      removeCarFromCarsList=(event)=>{
          const  Index= this.state.carList.findIndex(item=>
            //   item === Number(event.target.id)
            // console.log("item",item)
            console.log("event",(event.target.id))
          );
            console.log("Index",Index)
          let remainingCars = this.state.carList.filter((item,index)=>
              index!=Index,
          )
          this.setState({
              carList:remainingCars
          })
      }
     render(){
         return(<div>
                 <div style={{display:"flex",backgroundColor:"black",color:"white",width:"100%"}}>
                     <Link style={{marginTop:"30px",marginLeft:"30px",marginRight:"30px"}} to="/" >  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg> </Link>
                     <h3 style={{marginTop:"25px"}} >Cars List </h3>
                 </div>
                 <div>
                    <button onClick = {this.addCarToCarsList} >AddCar </button>
                        <div> 
                        {this.state.carList.map((state)=> {
                        console.log("state",state)
                        return <Car key={state} carId={state}
                        removeCarFromCarsList={this.removeCarFromCarsList} />}) 
                        }
                        </div>
                 </div>
                </div>
            );
     }
 }
 
 export {CarsList,Car}