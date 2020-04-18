import React from 'react';
import cellDetails from '../cellDetails.js'
import {MainHeader,TopLevel,Middle,Level,Theme} from '../Header/styledComponent.js';
class Header extends React.Component{
    render(){
        const {theme,level,topLevel,onChangeSelectedTheme}=this.props;
        return(
            <MainHeader width={cellDetails[this.props.level].gridWidth} >
                <TopLevel>Top Level:{topLevel}</TopLevel>
                <Middle >
                    <Level>Level: {level} </Level>
                    <Theme theme={theme} onClick={onChangeSelectedTheme} >Mode:{theme==="light" ? "Light" : "Dark"} </Theme>
                </Middle>
            </MainHeader>
            )
    }
}
export default Header;



