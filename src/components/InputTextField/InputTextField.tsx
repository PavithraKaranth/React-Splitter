import React from 'react';
import './InputTextField.css';

interface InputTextFieldInterface {
  label?: string;
  error: string | null;
  icon?: JSX.Element;
  inputText?: string;
  handleText?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputTextField = ({
  label,
  icon,
  error,
  inputText,
  handleText,
}: InputTextFieldInterface) => {
  const errorClasses =
    error !== null ? 'inputTextField errorClasses' : 'inputTextField';
  return (
    <div className="inputTextField">
      <label className="label-container">{label}</label>
      <span className="error">{error}</span>
      <div className={errorClasses}>
        <input
          type="text"
          id="input-text"
          value={inputText}
          onChange={handleText}
        />
        <div className="imageContainer">{icon}</div>
      </div>
    </div>
  );
};
