import card  from './card.module.scss';
import cardList from './card-list.module.scss'
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Icon from '@components/Icon';

import React, { useState, useEffect } from 'react';
import Card from '@components/Card';
import ButtonGroup from '@components/ButtonGroup';
import Switches from '@components/Switches';
import Bg1 from '@img/bg1.jpg';
import Bg2 from '@img/bg2.jpg';
import Bg3 from '@img/bg3.jpg';
import TW from '@img/t-white.svg';
import T from '@img/t.svg';
import Flask1 from '@img/flask 1.png';

export function SimpleCard({ backgroundImage, flaskImage, title, children, classNameCard }) {
    const [add, setAdd] = useState(false);
    const [pt, setPt] = useState(1);
    const options = ['10 ML', '20 ML', '30 ML', '40 ML'];

    const btn = [
        {
            content: ['60', <Icon src={TW} img={true} />],
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
			content: ['60', <Icon src={T} img={true} />],
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
        <div className={card.card__simple + ' ' + classNameCard}>
            <Link to={'/product'}>
                {backgroundImage && (
                    <div className={card.card__simple_bg}>
                        <img loading="lazy" src={backgroundImage} alt="bg" />
                    </div>
                )}
                {flaskImage && (
                    <div className={card.card__simple_flask}>
                        <img loading="lazy" src={flaskImage} alt="flask" />
                    </div>
                )}
            </Link>
            <div className={card.card__simple_text}>
                <p className={card['card__simple_text-title']}>
                    {title}
                </p>
                <p className={card['card__simple_text-subtitle']}>100% pure</p>
            </div>
            {children}
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
									content={<Icon icon="fa-solid fa-xmark" />}
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
        </div>
    );
}