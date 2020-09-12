import React, { ChangeEvent } from "react";
import "./formInput.scss";

interface IFormInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  required: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: IFormInputProps) => {
  const { handleChange, label, ...otherProps } = props;

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} autoComplete="off" {...otherProps} />
      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : "form-input-label"}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
