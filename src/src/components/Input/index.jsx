import React from 'react';

const Input = ({
	type = 'text',
	value,
	placeholder = '',
	onChange = () => {},
	name = '',
	label,
	classLabel,
	count = '',
	...restProps
}) => {
	return (
		<>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				name={name}
				{...restProps}
			/>
			{label && !count ? <label className={classLabel}>{label}</label> : <></>}
			{label && count ? <label className={classLabel} data-count={count}>{label}</label> : <></>}
		</>
	);
};

export default Input;
