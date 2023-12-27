import React, { useState, useEffect } from 'react';
import cardList from './cardMainList.module.scss';
import Bg3 from '@img/bg3.jpg';
import Flask1 from '@img/flask 1.png';
import httpClient from '@api/axios'

import { SimpleCard } from '@components/Card/simple-card';

export default function CardMainList() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		// Функция для загрузки карточек товаров
		const fetchCards = async () => {
			try {
				const response = await httpClient.get('notion/get-cards');
				setCards(response.data); // Сохраняем данные в состояние
				//console.log(response.data)
			} catch (error) {
				console.error("Ошибка при получении карточек товаров:", error);
			}
		};

		fetchCards(); // Вызываем функцию загрузки карточек товаров
	}, []);

	return (
		<div className={cardList.cardList}>
			{cards.map(card => (
				<SimpleCard backgroundImage={Bg3} flaskImage={Flask1} title={card.name} classNameCard={cardList.cardList__item}>
				</SimpleCard>
			))}
		</div>
	);
}
