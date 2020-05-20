import React from 'react'
import ViewEditToggle from '../common/components/ViewEditToggle'
import CollapseExpand from '../common/components/CollapseExpand'
import DeviceTypeText from '../common/components/DeviceTypeText'
import DisplayMouseCoordinates from '../common/components/DisplayMouseCoordinates'
import {HocStyle,Heading} from '../common/styledComponent'
class HocUsage extends React.Component{
    render(){
        return (
        <HocStyle>
            <Heading>HOC's Usage </Heading>
            <ViewEditToggle />
            <CollapseExpand />
            <DeviceTypeText />
            <Heading>Render Props Usage</Heading>
            <DisplayMouseCoordinates />
        </HocStyle>)
    }
}

export default HocUsage;