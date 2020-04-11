import React from "react"
import {observer} from 'mobx-react';
import eventStore from '../../../stores/EventStore';
import AddEvent from '../AddEvent'
import Event from '../Event'
@observer
class EventApp extends React.Component{
    // onAddEvent=(event)=>{
    //     return <AddEvent />
    //     console.log(event.target)
    //   return eventStore.events.map((state)=>{
    //       console.log(state);
    //       <Event key={state} state={state}/>;
    //     });
    // }
    
    
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

export {EventApp,Event};

//onAddEvent={eventStore.onAddEvent}