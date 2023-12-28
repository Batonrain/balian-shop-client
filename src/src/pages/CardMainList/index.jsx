import React, { useState, useEffect } from 'react';
import cardList from './cardMainList.module.scss';
import Bg3 from '@img/bg3.jpg';
import Flask1 from '@img/flask 1.png';

import { SimpleCard } from '@components/Card/simple-card';
import getCards from '@api/cards';

export default function CardMainList() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				getCards()
					.then((response) => setCards(response.data))
					.catch(e => console.log(e.toJSON()))
			} catch (error) {
				console.error("Ошибка при получении карточек товаров:", error);
			}
		};

		fetchCards();
	}, []);

	return (
		<div className={cardList.cardList}>
			{cards.map(card => (
				<SimpleCard backgroundImage={Bg3} flaskImage={Flask1} title={card.name} sizesAndPrices={card.sizeAndPrice} classNameCard={cardList.cardList__item}>
				</SimpleCard>
			))}
		</div>
	);
}
