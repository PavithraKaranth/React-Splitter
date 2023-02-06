import React from 'react';
import './CustomButton.css';

interface customInterface {
  customValue: string;
  handleCustomInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomButton = ({ customValue, handleCustomInput }: customInterface) => {
  return (
    <div>
      <div className="custom-tip">
        <input
          type="text"
          className="tip-custom"
          onChange={handleCustomInput}
          value={customValue}
          placeholder="Custom"
        />
      </div>
    </div>
  );
};
export default CustomButton;
