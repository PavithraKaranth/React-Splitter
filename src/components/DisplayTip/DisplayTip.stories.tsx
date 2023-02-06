import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DisplayTip from './DisplayTip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/DisplayTip',
  component: DisplayTip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof DisplayTip>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayTip> = (args) => (
  <DisplayTip {...args} />
);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DisplayDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisplayDefault.args = {};
