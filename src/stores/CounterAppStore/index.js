import {observable,action} from 'mobx';
class Count{
    @observable number
    
    constructor(){
        this.number=0;
    }
    @action.bound
    onIncrement(){
        if(isNaN(this.number)){
         this.number=0;
        }
        this.number++;
    }
    @action.bound
    onDecrement(){
        if(isNaN(this.number)){
            this.number=0;
        }
        this.number--;
    }
    @action.bound
    displayInput(count){
        this.number=count;
    }
}

const countStore=new Count();
export default countStore;