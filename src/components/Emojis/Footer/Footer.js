import React from 'react'
import {Instruction,Heading,Paragraph} from '../Footer/styledComponents.js'
class Footer extends React.Component{
    render(){
        const  {selectedTheme,onChangeEmojiTheme}=this.props
        return(
            <Instruction themeState={selectedTheme}>
                <Heading>How to play?</Heading>
                <Paragraph>Get points by clicking on an image but don't click on any image more than once!</Paragraph>
            </Instruction>
            )
    }
}


export default Footer