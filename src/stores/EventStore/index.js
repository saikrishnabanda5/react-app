import React from 'react'
import {observable,action,computed} from 'mobx';
import EventModel from '../model/EventModel'
class EventStore {
    @observable events
    @observable isEditEvent
    constructor(props){
        this.events=[];
        this.isEditEvent=false;
    }
        
    @computed
    get eventCount(){
        return this.events.length
    }
    onAddEvent(nameValue,locationValue){
     console.log(event,i)
     const eventModel = 
     new EventModel({id:this.eventCount,name:nameValue,locations:locationValue});
     this.events.push(eventModel);
    }
    onChangeEventName(value){
        console.log(value)
     const eventModel = 
     new EventModel({id:this.eventCount,name:event.target.value});
     this.events.push(eventModel);
    }
    onChangeEventLocation(){
     const eventModel = 
     new EventModel({id:this.eventCount,locations:event.target.value});
     this.events.push(eventModel);
    }
}
const eventStore = new EventStore();
export default eventStore;
