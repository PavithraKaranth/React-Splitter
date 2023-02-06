import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButton from './CustomButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/customButton',
  component: CustomButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomButton> = (args) => {
  const [customValue, setCustom] = React.useState('');

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^[0-9]+$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
    }
  }
  return (
    <CustomButton
      {...args}
      customValue={customValue}
      handleCustomInput={handleCustomInput}
    />
  );
};

export const CustomDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

CustomDefault.args = {};
