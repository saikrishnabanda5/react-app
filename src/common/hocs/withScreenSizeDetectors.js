import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
export default function withScreenSizeDetectors(WrappedComponent){
     @observer
     class EnhancedComponent extends React.Component{
         @observable innerWidth
         componentDidMount(){
             window.addEventListener('resize',this.setInnerWidth)
         }
         setInnerWidth=()=>{
             this.innerWidth = window.innerWidth
         }
        isMobile=()=>{
            return this.innerWidth < 576
        }
        isTablet=()=>{
            return this.innerWidth >= 576 && this.innerWidth<992
        }
        isDesktop=()=>{
            return this.innerWidth >= 992
        }
        render(){
            return <WrappedComponent 
            isMobile={this.isMobile()} isTablet={this.isTablet()}
            isDesktop={this.isDesktop()} width={this.innerWidth}/>
        }
    }
    return EnhancedComponent
}   