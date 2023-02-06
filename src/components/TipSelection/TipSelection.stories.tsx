import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TipSelection from './TipSelection';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TipSelection',
  component: TipSelection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TipSelection>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TipSelection> = (args) => {
  const [tip, setTip] = React.useState(' ');

  function handleSelectedTip(value: string) {
    setTip(value);
  }

  return (
    <TipSelection
      {...args}
      tip={tip}
      handleSelectedTip={() => handleSelectedTip(tip)}
    />
  );
};
export const Tip5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tip5.args = {
  tip: '5',
  label: '5%',
};
export const Tip10 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tip10.args = {
  tip: '10',
  label: '10%',
};
export const Tip15 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tip15.args = {
  tip: '15',
  label: '15%',
};
export const Tip25 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tip25.args = {
  tip: '25',
  label: '25%',
};
export const Tip50 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tip50.args = {
  tip: '50',
  label: '50%',
};
