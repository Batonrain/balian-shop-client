import React from 'react';
import switches from './switches.module.scss';
import Select from '@components/Select';
import Button from '@components/Button';
import Icon from '@components/Icon';

export default function Switches({
	type = 'select',
	options = [],
	classNameSelect = '',
	onSelect = () => {},
    onClickMinus = () => {},
    onClickPlus = () => {},
	classNameButton = '',
    pt = 1
}) {
	return (
		<>
			{type == 'select' ? (
				<div className={switches.switches__ml + ' ' + classNameSelect}>
					<Select
						options={options}
						onSelect={onSelect}
						classNameArrow={switches.switches__btn}
					/>
				</div>
			) : (
				<></>
			)}
			{type == 'btn' ? (
				<div className={classNameButton}>
					<Button
						content={<Icon icon="fa-solid fa-minus" />}
						className={switches.switches__btn}
                        onClick={onClickMinus}
					/>
					<span className={switches.switches__value}>{pt} PT</span>
					<Button
						content={<Icon icon="fa-solid fa-plus" />}
						className={switches.switches__btn}
                        onClick={onClickPlus}
					/>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
