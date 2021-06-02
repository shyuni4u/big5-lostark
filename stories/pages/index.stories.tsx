import React from 'react';
import Wrapper from '../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Index from '../../pages/index';

export default {
  title: 'Views/Index',
  component: Index
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <Index />
  </Wrapper>
);

export const IndexView = Template.bind({});
