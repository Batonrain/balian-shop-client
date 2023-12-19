import React, { useState } from 'react';
import cardList from './cardMainList.module.scss';
import Card from '@components/Card';
import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';
import Switches from '@components/Switches';
import Icon from '@components/Icon';
import Bg1 from '@img/bg1.jpg';
import Bg2 from '@img/bg2.jpg';
import Bg3 from '@img/bg3.jpg';
import Flask1 from '@img/flask 1.png';

export default function CardMainList() {
	const [add, setAdd] = useState(false);
	const [pt, setPt] = useState(1);
	const options = ['10 ML', '20 ML', '30 ML', '40 ML'];

	const btn = [
		{
			content: '60 T',
			className: cardList.cardList__groups_btn,
		},
		{
			content: '25k Rp',
			className: cardList.cardList__groups_btn,
		},
		{
			content: <Icon icon="fa-cart-shopping" />,
			className: cardList.cardList__groups_btn,
			onClick: () => {
				setAdd(true);
			},
		},
	];

	const btnAdd = [
		{
			content: '60 T',
			className: cardList['cardList__add_parameter_btn-t'],
		},
		{
			content: '25k Rp',
			className: cardList['cardList__add_parameter_btn-currency'],
		},
		{
			content: 'ADD TO CART',
			className: cardList['cardList__add_parameter_btn-add'],
			onClick: () => {
				setAdd(true);
			},
		},
	];

	return (
		<div className={cardList.cardList}>
			<Card
				bg={Bg2}
				flask={Flask1}
				classNameCard={cardList.cardList__item}
				cardSimpleNameItem="Test"
			>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
				<div
					key="test"
					className={
						cardList.cardList__add +
						` ${add ? cardList.cardList__add_active : ''}`
					}
				>
					<div className={cardList.cardList__add_parameter}>
						<div className={cardList.cardList__add_parameter_main}>
							<div className={cardList.cardList__add_up}>
								<span className={cardList['cardList__add_up-text']}>
									<p className={cardList.cardList__add_title}>test</p>
									<p className={cardList.cardList__add_subtitle}>100% pure</p>
								</span>
								<Button
									content={<Icon icon="fas fa-xmark" />}
									className={cardList.cardList__add_close}
									onClick={() => setAdd(false)}
								/>
							</div>
							<div className={cardList.cardList__add_switch}>
								<Switches
									options={options}
									classNameSelect={cardList['cardList__add_switch-select']}
									onSelect={(selectedValue) => console.log(selectedValue)}
								/>
								<Switches
									type="btn"
									classNameButton={cardList['cardList__add_switch-btn']}
									onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
									onClickPlus={() => setPt(pt + 1)}
									pt={pt}
									onSelect={(selectedValue) => console.log(selectedValue)}
								/>
							</div>
						</div>
						<ButtonGroup
							buttons={btnAdd}
							classGroups={cardList.cardList__add_parameter_btn}
						/>
					</div>
				</div>
			</Card>
			<Card bg={Bg3} flask={Flask1} classNameCard={cardList.cardList__item}>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
			</Card>
			<Card bg={Bg1} flask={Flask1} classNameCard={cardList.cardList__item}>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
			</Card>
			<Card bg={Bg2} flask={Flask1} classNameCard={cardList.cardList__item}>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
			</Card>
			<Card bg={Bg3} flask={Flask1} classNameCard={cardList.cardList__item}>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
			</Card>
			<Card bg={Bg1} flask={Flask1} classNameCard={cardList.cardList__item}>
				<ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
			</Card>
		</div>
	);
}
