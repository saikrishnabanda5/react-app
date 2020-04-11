import React from 'react'
import {observable,action,computed} from 'mobx';
import TodoModel from '../../stores/model/TodoModel';
import {reaction} from 'mobx';
let id;
class TodoStore {
    @observable list
    @observable selectedFilter
    @observable itemsLeft
    constructor(){
        this.list=[];
        this.selectedFilter="All";
    }
    @computed
    get todoCount(){
        return this.list.length+1;
    }
    onKeyDownValue(event){
        const todoModel = new TodoModel({value:event.target.value,id:this.todoCount,isChecked:false,});
       this.list.push(todoModel);
    }
    @action.bound
    removetodo(event){
        const Index= this.list.findIndex(item=>
                item["id"] === Number(event.target.id));
        let remainingtodos = this.list.filter((item,index)=>
                index!=Index );
            this.list=remainingtodos;
    }
    @action.bound
    onAll(){
        this.selectedFilter="All";
    }
    @action.bound
    onActive(){
         this.selectedFilter="Active";
    }
    @action.bound
    onCompleted(){
         this.selectedFilter="Completed";
    }
    @action.bound 
    onClearCompleted(){
        let onCompletedLists= this.list.filter((item)=>{
           if(item.isChecked==false){
            return item;
           }
        }); 
        this.list=onCompletedLists;
    }
    @computed
    get itemsLeftCount(){
      return  this.list.filter(todo=>todo.isChecked===false).length;
    } 

}
const todoStore = new TodoStore();
export default todoStore;








/*

// carsAddReaction =reaction(fun,fun)
// data fun/tracking - returned value from this is sent to second fun as paramater
// effect fun
    
todoReaction =reaction((index)=>{
        const todo = this.list.filter((list)=>list.title.length>4)
        return todo
    },
    (title)=>{
        title.forEach((index)=>{
            if(index.title.length>4){
                // console.log("title",index.title)
            }
        })
        
    })
    
    // Dispose reaction
    componentWillUnmount(){
        this.todoReaction()
    }
    
    
    // if there is  a change  in observable variable it triggers
    
    
    
    // todoReaction =reaction(()=>this.list.map((list)=>list.title),
    // (title)=>console.log("title",title))*/
    
    
        
    // TodoReaction = reaction(()=>this.title,
    // (title)=>{console.log("todoTitle",title)})    
    