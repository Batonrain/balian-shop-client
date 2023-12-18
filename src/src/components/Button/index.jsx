import React from 'react';

export default function Button({
	content = '',
	className = '',
	onClick = () => {},
	type = 'button',
	disabled = false,
}) {
	return (
		<>
			<button
				className={className}
				type={type}
				onClick={onClick}
				disabled={disabled}
			>
				{content}
			</button>
		</>
	);
}
