import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../../../components/atoms/Button';

export default {
  title: 'Component/Atoms/Button',
  component: Button
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Wrapper>
    <Button {...args}>DEFAULT BUTTON</Button>
  </Wrapper>
);

export const Basic = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};
