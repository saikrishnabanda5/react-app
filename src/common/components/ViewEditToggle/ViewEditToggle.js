import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import WithToggle from '../../hocs/withToggle'
import {ToggleStyle,Heading,Button,Value,Input,Editing,ClickCancel} from '../ViewEditToggle/styledComponent'
@observer
class ViewEditToggle extends React.Component{
    @observable eventValue="Click on the edit button to start editing"
    ChangeValue=(event)=>{
        this.eventValue=event.target.value 
    }
    render(){
        const button = this.props.toggleStatus?"Cancel":"Edit";
        const ButtonTag = <Button onClick={this.props.onClickToggle}>{button}</Button>
        const InputValues= this.props.toggleStatus?
        <Input defaultValue={this.eventValue} onChange={this.ChangeValue}/>
        :<p>{this.eventValue}</p>
        return (<div>
            <ToggleStyle>
                <Heading>ViewEditToggle</Heading>
                <Value>
                    {this.props.toggleStatus?
                    <Editing>
                        {InputValues}
                        {ButtonTag}
                    </Editing>
                    :
                    <ClickCancel>
                        {InputValues}
                        {ButtonTag}
                    </ClickCancel>
                    }
                </Value>
            </ToggleStyle>
            </div>
        )
    }
}

export default WithToggle(ViewEditToggle);