import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
export default function WithToggle(WrappedComponent){
     @observer
     class EnhancedComponent extends React.Component{
        @observable toggleStatus
        constructor(props){
            super(props);
            this.toggleStatus=false;
        }
        onClickToggle=()=>{
            if(this.toggleStatus){
                this.toggleStatus=false;
            }
            else{
                this.toggleStatus=true;
            }
        }
        render(){
            return <WrappedComponent toggleStatus={this.toggleStatus} onClickToggle={this.onClickToggle}/>
        }
    }
    return EnhancedComponent
}   