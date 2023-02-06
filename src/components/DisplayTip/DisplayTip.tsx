/* eslint-disable react/react-in-jsx-scope */

import './DisplayTip.css';
interface TipInputDisplayInterface {
  tipAmount: number;
  totalTip: number;
  bill: string;
  people: string;
  disable: boolean;
  customValue: string;
  handleResetBtn: () => void;
}

const DisplayTip = ({
  tipAmount,
  totalTip,
  handleResetBtn,
  bill,
  people,
  disable,
  customValue,
}: TipInputDisplayInterface) => {
  return (
    <div className="display-tip-input">
      <div className="display-container">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">
            {isNaN(tipAmount) ? '$0.00' : tipAmount.toFixed(2)}
          </p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">
            {isNaN(totalTip) ? '$0.00' : totalTip.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="reset-btn">
        <button disabled={disable} className="btn" onClick={handleResetBtn}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default DisplayTip;
