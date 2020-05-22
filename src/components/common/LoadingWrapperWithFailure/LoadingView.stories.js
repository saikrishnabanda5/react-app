import React from 'react';
import {withKnobs,text} from '@storybook/addon-knobs';
import LoadingView from './LoadingView';

export default {
    component:"LoadingView",
    title:"Common/LoadingView",
    decorators: [withKnobs]
};

export const defaultView = () => <LoadingView
color={text('Color','black')}
/>;