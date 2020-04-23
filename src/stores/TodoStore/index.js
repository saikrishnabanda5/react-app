/* global fetch */
import React from 'react'
import {reaction} from 'mobx';
import {observable,action,computed} from 'mobx';
import TodoModel from '../../stores/model/TodoModel';
import { API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import TodoService from '../../services/TodoService/index.api';
let id;
class TodoStore {
    @observable list
    @observable selectedFilter
    @observable getTodoListAPIStatus
    @observable getTodoListAPIError
    todoService
    constructor(TodoService){
        this.todoService=TodoService
        this.init();
    }
    @action
    init(){
        this.list=[];
        this.selectedFilter="All";
        this.getTodoListAPIStatus=API_INITIAL;
        this.getTodoListAPIError = null;
    }
    @action.bound
    setTodoListResponse(todoResponse){
        todoResponse.forEach((object=>{
            const todoModel = new TodoModel({value:object.title,id:object.id,isChecked:object.completed,});
                 this.list.push(todoModel);
        }));
    }
    @action.bound
    setGetTodoListAPIStatus(apiStatus){
        this.getTodoListAPIStatus=apiStatus;
    }
    @action.bound
    setGetTodoListAPIError(error){
        this.getTodoListAPIError=error;
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
    @action.bound
    getTodo(){
        const todoPromise=this.todoService.getTodo();
        return bindPromiseWithOnSuccess(todoPromise)
               .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
               .catch(this.setGetTodoListAPIError);
    }
    @action
    clearStore(){
        this.init();
    }

}
export default TodoStore;
