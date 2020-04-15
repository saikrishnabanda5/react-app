import React from 'react';
import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import {MainHeader,TopLevel,Middle,Level,Theme} from '../Header/styledComponent.js';
class Header extends React.Component{
    render(){
        const {theme,level,topLevel,onChangeSelectedTheme}=this.props
        return(
            <MainHeader >
                <TopLevel>TopLevel:{topLevel}</TopLevel>
                <Middle >
                    <Level>Level:{level} </Level>
                    <Theme onClick={onChangeSelectedTheme}>Mode:{theme==="light" ? "Light" : "Dark"} </Theme>
                </Middle>
            </MainHeader>
            )
    }
}
export default Header;
