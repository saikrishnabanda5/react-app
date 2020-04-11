import {observable,action} from 'mobx';
class EventModel{
    @observable id
    @observable name
    @observable locations
    constructor(props){
        this.id=props.id;
        this.name=props.name;
        this.locations=props.locations;
    }
    
    @action.bound
    onUpdateEventDetails(){
        
    }
    onChangeEventName(){
        
    }
    onChangeEventLocation(){
        
    }

}

export  default EventModel;