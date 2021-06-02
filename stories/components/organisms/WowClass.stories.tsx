import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import WowClass from '../../../components/organisms/WowClass';

export default {
  title: 'Component/Organisms/WowClass',
  component: WowClass
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <WowClass />
  </Wrapper>
);

export const Basic = Template.bind({});
