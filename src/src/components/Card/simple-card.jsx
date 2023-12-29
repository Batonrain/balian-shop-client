import card  from './card.module.scss';
import cardList from '@pages/CardMainList/cardMainList.module.scss'
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
import { useCart } from '@contexts/cart-context';

export function SimpleCard({ backgroundImage, flaskImage, title, sizesAndPrices, children, classNameCard }) {
    const [add, setAdd] = useState(false);
    const [pt, setPt] = useState(1);
	const [selectedSize, setSelectedSize] = useState(sizesAndPrices[0].size); // Начальное значение - первый размер
    const [selectedPrice, setSelectedPrice] = useState(sizesAndPrices[0].priceInRub); // Начальная цена

	const { addToCart } = useCart();

	const handleAddToCart = () => {
		const product = {
			name: title,
			size: selectedSize,
			count: pt,
			pricePerItem: selectedPrice,
		}
		addToCart(product);
	  };

	const onSelectSize = (selectedValue) => {
        console.log(selectedValue);
        const selectedProduct = sizesAndPrices.find(product => product.size === selectedValue);
        if (selectedProduct) {
            setSelectedSize(selectedProduct.size);
            setSelectedPrice(selectedProduct.priceInRub);
        }
    };

	const options = sizesAndPrices.map(product => product.size);

    const btn = [
        {
            content: ['1', <Icon src={TW} img={true} />],
            className: cardList.cardList__groups_btn,
        },
        {
            content: `${selectedPrice} Rub`,
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
            content: [pt, <Icon src={T} img={true} />],
            className: cardList['cardList__add_parameter_btn-t'],
        },
        {
            content: `${selectedPrice} Rub`,
            className: cardList['cardList__add_parameter_btn-currency'],
        },
        {
            content: 'ADD TO CART',
            className: cardList['cardList__add_parameter_btn-add'],
            onClick: () => {
                handleAddToCart();
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
									onSelect={onSelectSize}
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