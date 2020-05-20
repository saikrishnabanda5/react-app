import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
// import {Coordinates} from '../MouseCoordinates/styledComponent'
import MouseCoordinates from '../MouseCoordinates'
@observer
class DisplayMouseCoordinates extends React.Component{
    renderDisplay=(mouse)=>{
        return(
        <div>
            <h1> DisplayMouseCoordinates</h1>
            <p> The mouse position is :({mouse.x},{mouse.y})</p>
        </div>
    );
    }
    render(){
        console.log(1)
        return (
            <MouseCoordinates renderDisplay={this.renderDisplay}/>
        );
    }
}

export default DisplayMouseCoordinates;