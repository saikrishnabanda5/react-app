import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Pagenator from './Pagenator';

export default {
   component: Pagenator,
   title: 'Ecommerce/Pagenator'
}
export const defaultView = () => <Pagenator />