import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import {Button} from './button';
import { withKnobs} from '@storybook/addon-knobs'
// knobs.story = {
//   decorators: [withKnobs]
// }


export default {
  component: "Buttonohy99",
  title: 'Buttgjfjon',   
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);