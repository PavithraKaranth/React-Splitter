/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { InputTextField } from '../InputTextField/InputTextField';
import TipSelection from '../TipSelection/TipSelection';
import TipSelectionButton from '../TipSelectionButton.tsx/TipSelectionButton';
import DisplayTip from '../DisplayTip/DisplayTip';
import './TipCalculator.css';
import React, { useEffect } from 'react';
import dollor from '../InputTextField/dollor.svg';
import person from '../InputTextField/person.svg';
import CustomButton from '../CustomButton/CustomButton';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TipCalculator = () => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [customValue, setCustom] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState(0);
  const [totalTip, setTotalTip] = React.useState(0);
  const [disable, setDisabled] = React.useState(true);
  
  // handle bill input
  function handleInputTextForBill(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForBill = /^\d*\.?\d*$/;
    if (event.target.value === '' || regexForBill.test(event.target.value)) {
      setBill(event.target.value);
      setDisabled(event.target.value === '');
    }
  }

  // handle people input
  function handleInputTextForPeople(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const regexForPeople = /^[0-9]+$/;
    if (event.target.value === '' || regexForPeople.test(event.target.value)) {
      setPeople(event.target.value);
      setDisabled(event.target.value === '');
    }
  }

  // handle Selected Tip
  function handleSelectedTip(value: string) {
    setTip(value);
  }
  // handle custom input
  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^\d*\.?\d*$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
      setDisabled(e.target.value === '');
    }
  }

  // Error handling
  function checkForErrorInBill() {
    return bill === '0' ? 'can not be zero' : null;
  }
  function checkForErrorInPeople() {
    return people === '0' ? 'can not be zero' : null;
  }

  // Calculating tip and total amount per person
  const inputTextBill = parseFloat(bill);
  const inputTextPeople = parseInt(people, 10);
  const tipIntNum = parseFloat(tip);
  const custom = parseFloat(customValue);

  useEffect(() => {
    console.log({ inputTextBill, inputTextPeople, tipIntNum });
  }, [inputTextBill, inputTextPeople, tipIntNum]);

  const calculatedTip = (inputTextBill * (tipIntNum / 100)) / inputTextPeople;
  const total = inputTextBill / inputTextPeople + calculatedTip;

  const calculateCustom = (inputTextBill * (custom / 100)) / inputTextPeople;
  const calculateTotalCustom =
    inputTextBill / inputTextPeople + calculateCustom;

  // handle Reset button
  function handleResetBtn() {
    setBill('');
    setPeople('');
    setTipAmount(0);
    setTotalTip(0);
    setCustom('');
    setTip('');
  }

  return (
    <div className="Tip-calculator">
      <div className="Tip-container">
        <InputTextField
          label={'Bill'}
          icon={<img src={dollor} />}
          inputText={bill}
          error={checkForErrorInBill()}
          handleText={handleInputTextForBill}
        />

        <TipSelectionButton
          handleSelectedTip={handleSelectedTip}
          handleCustomInput={handleCustomInput}
          customValue={customValue}
          tip={tip}
        />

        <InputTextField
          label={'Number Of People'}
          icon={<img src={person} />}
          inputText={people}
          error={checkForErrorInPeople()}
          handleText={handleInputTextForPeople}
        />
      </div>
      <div className="display-container">
        <DisplayTip
          tipAmount={calculatedTip > 0 ? calculatedTip : calculateCustom}
          totalTip={total > 0 ? total : calculateTotalCustom}
          handleResetBtn={handleResetBtn}
          bill={bill}
          people={people}
          disable={disable}
          customValue={customValue}
        />
      </div>
    </div>
  );
};

export default TipCalculator;
