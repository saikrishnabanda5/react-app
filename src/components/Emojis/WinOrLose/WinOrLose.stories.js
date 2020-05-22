import React from 'react'
import {withKnobs,text} from '@storybook/addon-knobs';
import WinOrLose from './WinOrLose'
export default {
    component:"WinOrLose",
    title:"EmojiGame/WinOrLose",
    decorators: [withKnobs]
};

export const defaultView = () => <WinOrLose
// color={text('Color','black')}
/>;