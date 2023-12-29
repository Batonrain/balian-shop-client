import React, { useState } from 'react';
import Icon from '@components/Icon';
import Switches from '@components/Switches';
import Card from '@components/Card';
import ButtonGroup from '@components/ButtonGroup';
import Modal from '@components/Modal';
import Input from '@components/Input';
import Bg1 from '@img/bg1.jpg';
import Bg3 from '@img/bg3.jpg';
import TW from '@img/t-white.svg';
import Flask1 from '@img/flask 1.png';
import basket from './basket.module.scss';
import { useCart } from '@contexts/cart-context';
import { BasketCard } from '@components/Card/basket-card';

export default function Basket() {
	const [pt, setPt] = useState(1);
	const { cartItems, removeFromCart } = useCart();
	const btn = [
		{
			content: ['60', <Icon src={TW} img={true} />],
			className: basket.basket__groups_item,
		},
		{
			content: '25k Rp',
			className: basket.basket__groups_item,
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const buttons = [
		{
			content: ['180', <Icon src={TW} img={true} />],
			className: basket.price_item,
		},
		{
			content: '75k Rp',
			className: basket.price_item,
		},
		{
			content: 'BUY',
			className: basket.price_item,
		},
	];

	return (
		<>
			<div className={basket.basket}>
				{cartItems.map(item => (
					<BasketCard 
						backgroundImage={Bg3} 
						flaskImage={Flask1} 
						title={item.name}
						product={item}
						onClickXmark={openModal}
						classNameCard={basket.basket__card} />
				))}
				<Card
					typeCard="basket"
					classNameCard={basket.basket__card}
					bg={Bg1}
					flask={Flask1}
					cardSimpleNameItem="Test"
					onClickXmark={openModal}
				>
					<div className={basket.basket__content}>
						<div className={basket.basket__content_ml}>10 ml</div>
						<Switches
							type="btn"
							classNameButton={basket['basket__switch-btn']}
							onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
							onClickPlus={() => setPt(pt + 1)}
							pt={pt}
							onSelect={(selectedValue) => console.log(selectedValue)}
						/>
						<ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
					</div>
				</Card>
				<Card
					typeCard="basket"
					classNameCard={basket.basket__card}
					bg={Bg1}
					flask={Flask1}
					onClickXmark={openModal}
					cardSimpleNameItem="Test"
				>
					<div className={basket.basket__content}>
						<div className={basket.basket__content_ml}>10 ml</div>
						<Switches
							type="btn"
							classNameButton={basket['basket__switch-btn']}
							onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
							onClickPlus={() => setPt(pt + 1)}
							pt={pt}
							onSelect={(selectedValue) => console.log(selectedValue)}
						/>
						<ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
					</div>
				</Card>
				<Card
					typeCard="basket"
					classNameCard={basket.basket__card}
					bg={Bg1}
					onClickXmark={openModal}
					flask={Flask1}
					cardSimpleNameItem="Test"
				>
					<div className={basket.basket__content}>
						<div className={basket.basket__content_ml}>10 ml</div>
						<Switches
							type="btn"
							classNameButton={basket['basket__switch-btn']}
							onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
							onClickPlus={() => setPt(pt + 1)}
							pt={pt}
							onSelect={(selectedValue) => console.log(selectedValue)}
						/>
						<ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
					</div>
				</Card>
				<Card
					typeCard="basket"
					classNameCard={basket.basket__card}
					bg={Bg1}
					onClickXmark={openModal}
					flask={Flask1}
					cardSimpleNameItem="Test"
				>
					<div className={basket.basket__content}>
						<div className={basket.basket__content_ml}>10 ml</div>
						<Switches
							type="btn"
							classNameButton={basket['basket__switch-btn']}
							onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
							onClickPlus={() => setPt(pt + 1)}
							pt={pt}
							onSelect={(selectedValue) => console.log(selectedValue)}
						/>
						<ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
					</div>
				</Card>
				<Card
					typeCard="basket"
					classNameCard={basket.basket__card}
					bg={Bg1}
					onClickXmark={openModal}
					flask={Flask1}
					cardSimpleNameItem="Test"
				>
					<div className={basket.basket__content}>
						<div className={basket.basket__content_ml}>10 ml</div>
						<Switches
							type="btn"
							classNameButton={basket['basket__switch-btn']}
							onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
							onClickPlus={() => setPt(pt + 1)}
							pt={pt}
							onSelect={(selectedValue) => console.log(selectedValue)}
						/>
						<ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
					</div>
				</Card>
			</div>
			<ButtonGroup buttons={buttons} classGroups={basket.price} />
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<p className={basket.price__text}>
					Are you sure you want to remove the item from your cart?
				</p>
				<div className={basket.price__input}>
					<Input
						type="checkbox"
						label="Don't show again"
						classLabel={basket.price__label}
					/>
				</div>
			</Modal>
		</>
	);
}
