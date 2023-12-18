import React, { useState } from 'react';
import select from './select.module.scss';
import Icon from '@components/Icon';
import Button from '@components/Button';

export default function Select({ options, onSelect, classNameArrow }) {
	const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (selectedValue) => {
		onSelect(selectedValue);
        setSelectedOption(selectedValue);
		setIsOpen(false);
	};
	return (
		<div className={select.select}>
			<div className={select.select__current} onClick={handleToggleMenu}>
				<p className={select.select__current_value}>{selectedOption}</p>
                <Button className={classNameArrow} content={<Icon icon={isOpen ? 'chevron-up' : 'chevron-down'} />} />
			</div>
			{isOpen && (
				<div className={select.select__options}>
					{options.map((option) => (
						<div
							key={option}
							className={select.select__option}
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
