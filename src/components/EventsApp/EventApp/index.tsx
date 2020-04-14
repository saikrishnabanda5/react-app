import React from "react"
import {observer} from 'mobx-react';
import eventStore from '../../../stores/EventStore';
import AddEvent from '../AddEvent'
import Event from '../Event'
@observer
class EventApp extends React.Component{
    
    render(){
        return(
            <div style={{margin:"20px"}}>
               <div>
                <AddEvent  />
                <Event />
               </div>
            </div>
            );
    }
}

export default EventApp;
