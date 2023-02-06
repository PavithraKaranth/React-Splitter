import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TipSelectionButton from './TipSelectionButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TipSelectionButton',
  component: TipSelectionButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof TipSelectionButton>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TipSelectionButton> = (args) => {
  const [customValue, setCustom] = React.useState('');
  const [tip, setTip] = React.useState('');

  function handleSelectedTip(value: string) {
    setTip(value);
  }

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^[0-9]+$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
    }
  }
  return (
    <TipSelectionButton
      handleSelectedTip={handleSelectedTip}
      handleCustomInput={handleCustomInput}
      customValue={customValue}
      tip={tip}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
