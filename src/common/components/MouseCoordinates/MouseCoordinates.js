import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import {Coordinates} from '../MouseCoordinates/styledComponent'
@observer
class MouseCoordinates extends React.Component{
    state={
        x:0,
        y:0
    }
    handleMouseMove=(event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }
    render(){
        return (
            <Coordinates onMouseMove={this.handleMouseMove}>
        
            {this.props.renderDisplay(this.state)}
            </Coordinates>
        )
    }
}

export default MouseCoordinates;