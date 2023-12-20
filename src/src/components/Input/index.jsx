import React from 'react';

const Input = ({
	type = 'text',
	value,
	placeholder = '',
	onChange = () => {},
  label,
  classLabel,
	...restProps
}) => {
	return (
		<>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				{...restProps}
			/>
			{label ? <label className={classLabel}>{label}</label> : <></>}
		</>
	);
};

export default Input;
