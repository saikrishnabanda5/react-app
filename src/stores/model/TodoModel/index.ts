import {observable,action} from 'mobx';
import todoStore from '../../../stores/TodoStore';
class TodoModel{
    @observable id
    @observable title
    @observable isChecked
    constructor(props){
        this.id=props.id;
        this.title=props.value;
        this.isChecked=props.isChecked;
    }
    @action.bound
    onUpdateTodoTitle(event){
        this.title=event.target.value;  
    }
    @action.bound
    onCompleteTodo(){
        if(this.isChecked){
            this.isChecked=false;
        }
        else{
            this.isChecked=true;
        }
    }
}

export  default TodoModel;