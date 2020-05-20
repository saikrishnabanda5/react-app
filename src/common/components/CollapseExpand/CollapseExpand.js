import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import WithToggle from '../../hocs/withToggle'
import {ToggleStyle,Heading,Button,Value,Items,Names,ButtonDetails} from '../CollapseExpand/styledComponent'
@observer
class CollapseExpand extends React.Component{
    render(){
        const button = this.props.toggleStatus?"Collapse":"Expand";
        const ButtonTag = <Button onClick={this.props.onClickToggle}>{button}</Button>
        return (<div>
            <ToggleStyle>
                <Heading>CollapseExpand</Heading>
                <Value>
                    <Names>Sample Shopping List: </Names>
                    <ButtonDetails>
                    <div>{ButtonTag} </div>
                        <div>{this.props.toggleStatus? 
                        <Items>
                            <Names>Egg</Names>
                            <Names>Bread</Names>
                        </Items>
                        :null}</div>
                    </ButtonDetails>
                </Value>
            </ToggleStyle>
            </div>
        )
    }
}

export default WithToggle(CollapseExpand);