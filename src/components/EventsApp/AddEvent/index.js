import React from "react"
import {observer} from 'mobx-react';
import {observable,computed} from 'mobx'
import eventStore from '../../../stores/EventStore';
@observer
class AddEvent extends React.Component{
    @observable eventName;
    @observable eventLocation;
    // constructor(){
    //     this.eventName="";
    //     this.eventLocation="";
    // }
    
    onAddEvent=(event)=>{
        eventStore.onAddEvent(this.eventName,this.eventLocation)
    }
    onChangeEventName=(event)=>{
         this.eventName=event.target.value
        }
    onChangeEventLocation=(event)=>{
        this.eventLocation=event.target.value
    }
    render(){
        console.log("prs",this.props)
        return(
            <div>
                <input style={{border:"1px solid black"}} onChange={this.onChangeEventName}/>
                <input style={{border:"1px solid black"}} onChange={this.onChangeEventLocation}/>
                <button onClick={this.onAddEvent}>Add Event</button>
            </div>
            )
    }
}

export default AddEvent;