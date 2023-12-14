import React from 'react';

const Input = ({ 
    type = 'text', 
    value, 
    placeholder = '', 
    onChange = () => {}, 
    ...restProps 
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...restProps}
    />
  );
};

export default Input;