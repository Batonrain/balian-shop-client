import React from 'react';
import ReactSlider from 'react-slider';
import input from './input.module.scss';
// Дока по слайдеру - https://zillow.github.io/react-slider/

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
			{type == 'range' ? (
				<div className={input.range}>
					<div className={input.range__value}>
						<input type="text" placeholder="From" />
						<div className="line"></div>
						<input type="text" placeholder="do" />
					</div>
					<ReactSlider
						className="horizontal-slider"
						thumbClassName="horizontal-slider-thumb"
						trackClassName="horizontal-slider-track"
						defaultValue={[0, 100]}
						pearling
						minDistance={10}
					/>
				</div>
			) : (
				<>
					<input
						type={type}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
						name={name}
						{...restProps}
					/>
					{label && !count ? (
						<label className={classLabel}>{label}</label>
					) : (
						<></>
					)}
					{label && count ? (
						<label className={classLabel} data-count={count}>
							{label}
						</label>
					) : (
						<></>
					)}
				</>
			)}
		</>
	);
};

export default Input;
