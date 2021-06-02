import React from 'react';
import Wrapper from '../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import WowClass from '../../pages/wowclass';

export default {
  title: 'Views/WowClass',
  component: WowClass
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <WowClass {...args} />
  </Wrapper>
);

export const WowClassView = Template.bind({});
