import React, { useState } from 'react';
import SwiperCard from '@components/SwiperCard';
import Select from '@components/Select';
import Icon from '@components/Icon';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import Bg1 from '@img/bg1.jpg';
import Bg2 from '@img/bg2.jpg';
import Flask1 from '@img/flask 1.png';
import product from './product.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function Product() {
	const [pt, setPt] = useState(1);

	const options = ['10 ML', '20 ML', '30 ML', '40 ML'];
	const buttons = [
		{
			content: '60 T',
			className: product.product__price_item,
		},
		{
			content: '25k Rp',
			className: product.product__price_item,
		},
		{
			content: <Icon icon="fa-cart-shopping" />,
			className: product.product__price_item,
		},
	];
	return (
		<div className={product.product}>
			<Swiper
				loop={true}
				navigation={true}
				cssMode={true}
				modules={[Navigation]}
				className={product.product__container}
			>
				<SwiperSlide>
					<SwiperCard
						imgBg={Bg1}
						classBg={product.product__bg}
						imgFlask={Flask1}
						classFlask={product.product__flask}
						classContainer={product.product__container}
						btn={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperCard
						imgBg={Bg2}
						classBg={product.product__bg}
						imgFlask={Flask1}
						classFlask={product.product__flask}
						classContainer={product.product__container}
						btn={false}
					/>
				</SwiperSlide>
			</Swiper>
			<div className={product.product__name}>
				<p className={product.product__name_title}>sandalwood</p>
				<p className={product.product__name_subtitle}>100% pure</p>
			</div>
			<div className={product.product__count}>
				<div className={product.product__count_ml}>
					<Select
						options={options}
						onSelect={(selectedValue) => console.log(selectedValue)}
						classNameArrow={product.product__btn}
					/>
				</div>
				<div className={product.product__count_pt}>
					<Button
						content={<Icon icon="fas fa-minus" />}
						onClick={() => (pt > 1 ? setPt(pt - 1) : '')}
						className={product.product__btn}
					/>
					<span className={product['product__count_pt-value']}>{pt} PT</span>
					<Button
						content={<Icon icon="fas fa-plus" />}
						onClick={() => setPt(pt + 1)}
						className={product.product__btn}
					/>
				</div>
			</div>
			<div className={product.product__description}>
				SANDALWOD 100% PURE is your ideal choice for skin care and aromatherapy.
				This oil is extracted from sandalwood and has a rich woody aroma with
				special notes. SANDALWOD 100% PURE is your ideal choice for skin care
				and aromatherapy. This oil is extracted from sandalwood and has a rich
				woody aroma with special notes. SANDALWOD 100% PURE is your ideal choice
				for skin care and aromatherapy. This oil is extracted from sandalwood
				and has a rich woody aroma with special notes.
			</div>
			<div className={product.product__price}>
				<ButtonGroup buttons={buttons} />
			</div>
		</div>
	);
}
