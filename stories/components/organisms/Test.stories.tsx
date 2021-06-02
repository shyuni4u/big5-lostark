import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Test from '../../../components/organisms/Test';

export default {
  title: 'Component/Organisms/Test',
  component: Test
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <Test />
  </Wrapper>
);

export const Basic = Template.bind({});
