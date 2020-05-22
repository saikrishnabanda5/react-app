import React from 'react';
import {withKnobs,text,color} from '@storybook/addon-knobs';
import NoDataView from '.';

export default {
    component:"NoDataView",
    title:"Common/NoDataView",
    decorators: [withKnobs]
};

export const defaultView = () => <NoDataView
text={text('Text','No Data Found')}
color={color('colour','red')}
/>;