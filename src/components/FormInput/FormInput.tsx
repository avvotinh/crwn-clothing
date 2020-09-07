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

class FormInput extends React.Component<IFormInputProps> {
  constructor(props: IFormInputProps) {
    super(props);
  }

  render() {
    const { handleChange, label, ...otherProps } = this.props;

    return (
      <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shink" : "form-input-label"
            }`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
}

export default FormInput;
