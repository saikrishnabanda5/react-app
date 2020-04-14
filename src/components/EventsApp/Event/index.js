import React from "react"
import {observer} from 'mobx-react';
import {observable} from 'mobx'
@observer
class Event extends React.Component{
    @observable isEditEvent
    @observable eventName
    @observable eventLocation
    
    
    onDeleteEvent(){
        
    }
    onChangeEventLocation(){
        
    }
    onChangeEventName(){
        
    }
    onUpdateEventDetails(){
        
    }
    render(){
        // const {name,locations} =this.props
        console.log("prs",this.props)
        return(
            <div>
                <div>Event Name:</div>
                <div>Event Location:</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            )
    }
}

export default Event;