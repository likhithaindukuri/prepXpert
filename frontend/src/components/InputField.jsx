import React from "react";

const InputField = ({ label, type, value, onChange, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default InputField;
