/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import TipSelection from '../TipSelection/TipSelection';
import '../TipSelection/TipSelection.css';
import './TipSelectionButton.css';
interface TipSelectionButtonInterface {
  customValue: string;
  tip: string;
  handleSelectedTip: (value: string) => void;
  handleCustomInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TipSelectionButton = ({
  customValue,
  tip,
  handleSelectedTip,
  handleCustomInput,
}: TipSelectionButtonInterface) => {
  return (
    <div className="select-container">
      <div className="tip-selection">
        <p className="select-tip">Select Tip%</p>
      </div>
      <div className="wrapper">
        <div className="tip-wrap">
          <div className="tip-row">
            <TipSelection
              tip={tip}
              handleSelectedTip={() => handleSelectedTip('5')}
              label="5%"
            />
            <TipSelection
              tip={tip}
              handleSelectedTip={() => handleSelectedTip('10')}
              label="10%"
            />

            <TipSelection
              tip={tip}
              handleSelectedTip={() => handleSelectedTip('15')}
              label="15%"
            />
          </div>
        </div>
        <div className="tip-wrap2">
          <div className="tip-row">
            <TipSelection
              tip={tip}
              handleSelectedTip={() => handleSelectedTip('25')}
              label="25%"
            />
            <TipSelection
              tip={tip}
              handleSelectedTip={() => handleSelectedTip('50')}
              label="50%"
            />

            <CustomButton
              customValue={customValue}
              handleCustomInput={handleCustomInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TipSelectionButton;
