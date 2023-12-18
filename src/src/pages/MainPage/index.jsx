import React from 'react';
import SwiperCard from '@components/SwiperCard';
import Bg1 from '@img/bg1.jpg';
import Bg2Swiper from '@img/Bg2Swiper.jpg';
import Bg3 from '@img/bg3.jpg';
import Flask1 from '@img/flask 1.png';
import Search from '@components/Search';
import CardMainList from '@pages/CardMainList';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function MainPage() {
	return (
		<>
			<Swiper
				navigation={{
					nextEl: '.custom-swiper-button-next',
					prevEl: '.custom-swiper-button-prev',
				}}
				loop={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<SwiperCard
						imgBg={Bg1}
						imgFlask={Flask1}
						slogan="Smells like sandal spirit"
						nextClass="custom-swiper-button-next"
						prevClass="custom-swiper-button-prev"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperCard
						imgBg={Bg2Swiper}
						imgFlask={Flask1}
						slogan="Smells like sandal spirit"
						nextClass="custom-swiper-button-next"
						prevClass="custom-swiper-button-prev"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperCard
						imgBg={Bg3}
						imgFlask={Flask1}
						slogan="Smells like sandal spirit"
						nextClass="custom-swiper-button-next"
						prevClass="custom-swiper-button-prev"
					/>
				</SwiperSlide>
			</Swiper>
			<Search />
			<CardMainList />
		</>
	);
}
