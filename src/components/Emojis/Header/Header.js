import React from 'react'
import {HeaderPart,LeftPart,RightPart,SelectTheme,BothScores} from '../Header/styledComponents.js'
class Header extends React.Component{
    render(){
        const  {selectedTheme,onChangeEmojiTheme}=this.props
        return(
            <HeaderPart themeState={selectedTheme}>
                <LeftPart >
                    <h1>Emoji Game</h1>
                </LeftPart>
                <RightPart>
                    <BothScores><b> Score:{this.props.score}</b></BothScores>
                    <BothScores><b> TopScore:{this.props.topScore}</b></BothScores>
                    <SelectTheme themeState={selectedTheme}
                             onClick={onChangeEmojiTheme}> {selectedTheme!=="light" ? "LIGHT THEME" : "DARK THEME"}
                    </SelectTheme>
                </RightPart>
            </HeaderPart>
            )
    }
    
}
export {Header};