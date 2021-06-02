import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Panel, PanelProps } from '../../../components/atoms/Panel';

export default {
  title: 'Component/Atoms/Panel',
  component: Panel
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<PanelProps> = (args) => (
  <Wrapper>
    <Panel {...args}>
      <h3 className={'panel-sub-title'}>H3 PANEL SUB TITLE</h3>
      <h2 className={'panel-title'}>H2 PANEL TITLE</h2>
      <div className={'panel-content'}>
        DIV PANEL TEXT<br/>
        DIV PANEL TEXT<br/>
        DIV PANEL TEXT<br/>
        DIV PANEL TEXT<br/>
      </div>
    </Panel>
  </Wrapper>
);

export const Basic = Template.bind({});
