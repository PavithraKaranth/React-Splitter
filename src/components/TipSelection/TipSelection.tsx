/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './TipSelection.css';
interface TipSelectionInterface {
  tip: string;
  label: string;
  handleSelectedTip: (value: string) => void;
}
const TipSelection = ({
  tip,
  label,
  handleSelectedTip,
}: TipSelectionInterface) => {
  return (
    <div>
      <div className="Tip-selection">
        <div className="Tip-amt">
          <button
            className="Tip-btn"
            onClick={() => handleSelectedTip(tip)}
            value={tip}
          >
            {label}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TipSelection;
