import React from 'react';

interface IFormatInput {
  handleChange?(event: React.SyntheticEvent<HTMLInputElement>): void;
  label: string;
  value: string;
  name?: string;
  type?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  required: true | false;
}

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: IFormatInput): JSX.Element => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
