import React from 'react'
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import withScreenSizeDetectors from '../../hocs/withScreenSizeDetectors';
import {ToggleStyle,Heading,SubHeading} from '../DeviceTypeText/styledComponent';
@observer
class DeviceTypeText extends React.Component{
    getDeviceType=()=>{
        if(this.props.isMobile){
            return "Mobile"
        } 
        else if(this.props.isTablet){
            return "Tablet"
        }
        else if(this.props.isDesktop){
            return "Desktop"
        }
    }
    render(){
        console.log(this.props)
        return (
            <div>
            <ToggleStyle>
                <Heading>DeviceTypeText</Heading>
                <SubHeading>Device Type:{this.getDeviceType()}</SubHeading>
            </ToggleStyle>
            </div>
        );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);


